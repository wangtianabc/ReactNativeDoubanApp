import React from 'react'
import {
    Text,
    View,
    Image,
    Button,
    FlatList,
    StyleSheet,
    ListView,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import ItemCell from './ItemCell'
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
        //console.log(this.props)
    }
    refreshData = () => {

    }
    onPress = (movie) => {

    }
    renderItem = movie =>
        <ItemCell item={movie} onPressHandler={this.onPress} />

    renderContent = () => {
        if (this.props.loading || this.props.movies === undefined || this.props.movies.length === 0) {
            return <LoadingView/>
        }

        return (
            <ItemListView
                dataSource={this.state.dataSource.cloneWithRows(this.props.movies)}
                isRefreshing={this.props.isRefreshing}
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
        borderBottomColor: '#EFEFEF'
    },
})
export default HotList