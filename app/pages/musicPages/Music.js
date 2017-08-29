import React from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import MusicCell from './MusicCell'

class Music extends React.Component {
    constructor(props) {
        super(props)
    }

    onPress = (movie) => {
        const { navigate } = this.props.navigation
        navigate('MovieDetail', {movie})
    }

    renderContent = () => {
        const { music } = this.props
        if (music.loading) {
            return <LoadingView msg={'音乐加载中'}/>
        }
        return music.musics.map((item, i) => {
            return <MusicCell key={i} musicItem={item} onPressHandler={this.onPress}/>
        })
    }

    componentDidMount() {

    }

    searchAction = () => {
        const { musicAction} = this.props
        musicAction.receiveMusicList(false, [])
        musicAction.requestMusicList(true, '/music/search?q=' + this.props.songName)

    }

    render() {
        return (
            <ScrollView style={styles.screen}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {this.renderContent()}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        width: global.gScreen.width,
        height: global.gScreen.height,
    }
})

export default Music