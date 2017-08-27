import React from 'react'
import {
    View,
    ListView,
    StyleSheet
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import MusicItem from './MusicItem'
import MusicList from './MusicList'

class Music extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    onPress = (movie) => {
        const { navigate } = this.props.navigation
        navigate('MovieDetail', {movie})
    }

    renderContent = () => {
        const { music } = this.props
        if (music.loading) {
            return <LoadingView msg={ '加载音乐搜索结果...' } style={styles.loading}/>
        }

        return (
            <MusicList
                dataSource={this.state.dataSource.cloneWithRows(music.musics)}
                isRefreshing={false}
                renderItem={this.renderItem}/>
        )
    }

    renderItem = music =>
        <MusicItem item={music} onPressHandler={this.onPress} />

    componentDidMount() {

    }

    searchAction() {
        const { musicAction} = this.props
        musicAction.receiveMusicList(false, [])
        musicAction.requestMusicList(true, '/music/search?q=' + this.props.songName)

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

export default Music