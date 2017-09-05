import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as movieCreators from '../../actions/Movies'
import LoadingView from '../../components/LoadingView'
import axios from '../../utils/MyAxios'
import { Douban_Url } from '../../constans/Url'
import Icon from 'react-native-vector-icons/Ionicons'
import Star from '../../components/Star'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import CommentsList from './CommentsList'

class MovieDetail extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.title,
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>,
        headerRight: (
            <Icon.Button
                name="md-share"
                backgroundColor="transparent"
                underlayColor="transparent"/>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            reading: true,
            movie: ''
        }
    }

    componentDidMount() {
        const id = this.props.navigation.state.params.movie.id
        axios.get(`${Douban_Url}/movie/subject/${id}`).then(res => {
            this.setState({reading: false, movie: res.data})
            this.refs.commentsList.loadingComments()
        })
    }

    renderContent = () => {
        return (
            this.state.reading ? <LoadingView msg={'加载中...'}/> : <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{uri: this.state.movie.images.large}} style={{width: gScreen.width/2, height: 280}}/>
                </View>
                <View style={styles.movieInfo}>
                    <View>
                        <Text style={{fontSize: 22, fontWeight: '600', marginBottom: 5}}>{this.state.movie.title}</Text>
                        <Text style={styles.smallFont}>{this.state.movie.year}/{this.state.movie.countries}/{this.state.movie.genres}</Text>
                        <Text style={styles.smallFont}>国家：{this.state.movie.countries}</Text>
                        <Text style={styles.smallFont}>想看人数：{this.state.movie.wish_count}</Text>
                    </View>
                    <View style={styles.movieSquare}>
                        <Text style={styles.smallFont}>豆瓣评分</Text>
                        <Text style={{fontSize: 20, fontWeight: '600'}}>{this.state.movie.rating.average}</Text>
                        <View style={{marginBottom: 3, marginTop: 3}}><Star value={this.state.movie.rating.stars}/></View>
                        <Text style={styles.smallFont}>{this.state.movie.ratings_count}</Text>
                    </View>
                </View>
                <ScrollableTabView renderTabBar={() => <DefaultTabBar tabStyle={styles.tab} textStyle={styles.tabText} />}

                                   locked={false}
                                   tabBarUnderlineStyle={styles.lineStyle}
                                   tabBarBackgroundColor='#FFFFFF'
                                   tabBarActiveTextColor={global.gColor.themeColor}
                                   tabBarInactiveTextColor='#959595'
                >
                    <ScrollView  tabLabel='短评'>
                        <CommentsList id={this.state.movie.id} ref="commentsList"/>
                    </ScrollView>
                    <ScrollView tabLabel='长评'>
                        <Text>长评</Text>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderContent()}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultMovie: state.movie.resultMovie,
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
        backgroundColor: gColor.backgroundColor
    },
    header: {
        backgroundColor: '#2A362C',
        height: 310,
        width: gScreen.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    movieInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        borderColor: gColor.border,
        margin: 5
    },
    movieSquare: {
        backgroundColor: gColor.backgroundColor,
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#9B9B9B',
        shadowOffset: {height: 0, width: 0},
        shadowRadius: 10,
        shadowOpacity: 0.5,
        borderWidth: 1,
        borderColor: gColor.border,
    },
    smallFont: {
        fontSize: 11,
        color: '#9B9B9B'
    },
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 16
    },
    lineStyle: {
        height: 1,
        backgroundColor: gColor.themeColor
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)