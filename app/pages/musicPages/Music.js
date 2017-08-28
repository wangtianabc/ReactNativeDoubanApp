import React from 'react'
import {
    View,
    Text,
    ListView,
    ActivityIndicator,
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
        return music.loading ? <LoadingView msg= { '音乐加载中...' }/> : <MusicList
                dataSource={this.state.dataSource.cloneWithRows(music.musics)}
                isRefreshing={false}
                renderItem={this.renderItem}/>
    }

    renderItem = music =>
        <MusicItem item={music} onPressHandler={this.onPress}/>

    componentDidMount() {

    }

    searchAction = () => {
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
    }
})

export default Music