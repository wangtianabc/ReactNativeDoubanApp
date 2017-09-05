import React from 'react'
import {
    View,
    StyleSheet,
    ListView
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import HotItemCell from './HotItemCell'
import ItemListView from './ItemListView'


class HotList extends React.Component {
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
        movieAction.requestHotMovieList(true, true, false, '/movie/in_theaters')
    }
    refreshData = () => {

    }
    onPress = (movie) => {
        const { navigate } = this.props.navigation
        navigate('Detail', {movie})
    }

    renderItem = movie =>
        <HotItemCell item={movie} onPressHandler={this.onPress} />

    renderFooter = () => {

    }

    renderContent = () => {
        const { movie } = this.props
        if (movie.loading || movie.movies === undefined || movie.movies.length === 0) {
            return <LoadingView msg={ '热映电影加载...' } style={styles.loading}/>
        }

        return (
            <ItemListView
                dataSource={this.state.dataSource.cloneWithRows(movie.movies)}
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
export default HotList