import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as movieCreators from '../../actions/Movies'
import LoadingView from '../../components/LoadingView'
import MovieItem from './MovieItem'

class MovieSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtValue: '',
            footerFlag: false,
            headerFlag: false,
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    })

    onSearch = () => {
        this.getData(0, true, false, false)
    }

    getData = (start, loading, isRefreshing, isLoadMore) => {
        this.props.movieAction.requestMovieSearch(loading, '/movie/search?q=' + this.state.txtValue + '&start=' + start, isRefreshing, isLoadMore)
    }

    onCancel = () => {
        const { goBack } = this.props.navigation
        this.props.movieAction.receiveMovieSearch(false, [], 0, false, false)  // 清空上次搜索结果
        goBack()
    }

    header = () => {
        if(this.props.loading){
            this.setState({headerFlag: true})
            setTimeout(() => {this.setState({headerFlag: false})}, 10000)
        }
        if(this.state.headerFlag && !this.props.loading){
            return <Text style={styles.info}>加载数据{this.props.resultMovies.length}条</Text>
        }else {
            return null
        }
    }

    footer = () => {
        if(this.props.loadMore) {
            return <Text style={styles.info}>数据加载中。。。</Text>
        }else {
            if(this.state.footerFlag) {
                setTimeout(() => {this.setState({footerFlag: false})}, 3000)
            }
            return this.state.footerFlag ? <Text style={styles.info}>数据加载中。。。</Text> : null
        }
    }

    separator = () => {
        return <View style={{ height: 1, backgroundColor: gColor.border }}/>
    }

    onRefresh = () => {
        this.getData(0, false, true, false)
    }

    onLoadMore = () => {
        if(this.props.loadMore){
            this.setState({footerFlag: true})
            this.getData(this.props.resultMovies.length, false, false, true)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <View style={styles.searchItem}>
                        <Icon name="md-search" size={20} color="#8B8B8B" style={styles.icon} backgroundColor="transparent" underlayColor="transparent"/>
                        <View style={{flex: 1}}>
                            <TextInput
                                placeholder="电影搜索"
                                autoFocus={true}
                                underlineColorAndroid = {'transparent'}
                                multiline={false}
                                onChangeText={(text) => {
                                    this.setState({ txtValue: text })
                                }}
                                onSubmitEditing={this.onSearch}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cancel} onPress={this.onCancel}>
                        <Text>取消</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.props.loading ? <LoadingView msg={'结果加载中'}/> :
                        <FlatList
                            data={this.props.resultMovies}
                            ListHeaderComponent={this.header}
                            ListFooterComponent={this.footer}
                            ItemSeparatorComponent={this.separator}
                            refreshing={this.props.isRefreshing}
                            onRefresh={this.onRefresh}

                            initialNumToRender={10}

                            onEndReachedThreshold={0.1}
                            onEndReached={this.onLoadMore}

                            renderItem={(item) => {
                                return <MovieItem item={item}/>
                            }}
                            style={{marginTop: 10}}
                        />
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultMovies: state.movie.resultMovies,
        loading: state.movie.loading,
        total: state.movie.total,
        isRefreshing: state.movie.isRefreshing,
        isLoadMore: state.movie.isLoadMore,
        loadMore: state.movie.loadMore
    }
}

const mapDispatchToProps = (dispatch) => {
    const movieAction = bindActionCreators(movieCreators, dispatch)
    return {
        movieAction
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: gColor.backgroundColor,
        height: gScreen.height,
        marginBottom: 50,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: gColor.backgroundColor,
        borderWidth: 1,
        borderColor: gColor.border,
        marginRight: 10,
        marginLeft: 20,
        borderRadius: 5,
        flex: 5,
    },
    icon: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textInput: {
        flex: 1,
        fontSize: 10,
        backgroundColor: gColor.backgroundColor,
    },
    cancel: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 5,
        marginRight: 20,
    },
    info: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        backgroundColor: gColor.backgroundColor
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)