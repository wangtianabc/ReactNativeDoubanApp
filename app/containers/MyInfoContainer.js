import React from 'react'
import {
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class MyInfoContainer extends React.Component {
    static navigationOptions = {
        title: '我的',
        tabBarIcon: ({ tintColor }) =>
        <Icon name="md-person" size={25} color={tintColor} />
    }

    render() {
        return <Text>我的信息</Text>
    }
}

export default MyInfoContainer