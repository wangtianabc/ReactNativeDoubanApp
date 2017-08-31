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
            txtValue: ''
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    })

    onSearch = () => {
        this.props.movieAction.requestMovieSearch(true, '/movie/search?q=' + this.state.txtValue)
    }

    onCancel = () => {
        const { goBack } = this.props.navigation
        this.props.movieAction.receiveMovieSearch(false, [])  // 清空上次搜索结果
        goBack()
    }

    render() {

        /*指定每个元素的key，消除virtualizedList 的key警告*/
        const movies = this.props.resultMovies
        if (movies !== undefined && movies.length > 0) {
            for (var i=0; i<movies.length; i++) {
                var obj = {'key': i}
                Object.assign(movies[i], obj)
            }
        }

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
                            data={movies}
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
        loading: state.movie.loading
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)