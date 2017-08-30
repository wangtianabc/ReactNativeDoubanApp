import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ListView
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import TopItemCell from './TopItemCell'
import ItemListView from './ItemListView'


class Top250 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    componentDidMount() {
        const { movieAction } = this.props
        movieAction.requestTOPMovieList(true, true, false, '/movie/top250')

    }
    refreshData = () => {

    }
    onPress = (movie) => {
        const { navigate } = this.props.navigation
        navigate('MovieDetail', {movie})
    }
    renderItem = movie =>
        <TopItemCell item={movie} onPressHandler={this.onPress} />

    renderContent = () => {
        const { movie } = this.props
        if (movie.loading || movie.topMovies === undefined || movie.topMovies.length === 0) {
            return <LoadingView msg= { 'TOP250加载...' } style={styles.loading}/>
        }

        return (
            <ItemListView
                dataSource={this.state.dataSource.cloneWithRows(movie.topMovies)}
                isRefreshing={movie.isRefreshing}
                renderItem={this.renderItem}/>
        )
    }

    render() {
        return (
            <View>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        marginTop: 100
    },
    hotList: {
        height: 130,
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: global.gColor.border
    },
})
export default Top250