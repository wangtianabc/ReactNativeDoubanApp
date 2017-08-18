import React from 'react'
import {
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class ClassicContainer extends React.Component {
    static navigationOptions = {
        title: '经典',
        tabBarIcon: ({ tintColor }) =>
        <Icon name="md-film" size={25} color={tintColor} />
    }

    render() {
        return <Text>List of all classical</Text>
    }
}

export default ClassicContainer