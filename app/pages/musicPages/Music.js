import React from 'react'
import {
    View,
    Text
} from 'react-native'

class Music extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    searchAction() {
        const { musicAction, music } = this.props
        musicAction.requestMusicList(true, '/music/search?q=' + this.props.songName)
    }

    render() {
        return (
            <Text>test
            </Text>
        )
    }
}

export default Music