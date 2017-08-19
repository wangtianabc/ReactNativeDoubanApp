import React from 'react'
import {
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class ClassicContainer extends React.Component {
    static navigationOptions = {
        title: '音乐',
        tabBarIcon: ({ tintColor }) =>
        <Icon name="md-musical-notes" size={25} color={tintColor} />
    }

    render() {
        return <Text>music</Text>
    }
}

export default ClassicContainer