import React from 'react'
import {
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class HomeContainer extends React.Component {
    static navigationOptions = {
        title: '热映',
        tabBarIcon: ({ tintColor }) =>
        <Icon name="md-videocam" size={25} color={tintColor} />
    }

    render() {
        return <Text>List of all movies</Text>
    }
}

export default HomeContainer