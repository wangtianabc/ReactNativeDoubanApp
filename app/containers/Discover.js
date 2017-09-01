import React from 'react'
import {
    Text,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: '发现',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-apps" size={25} color={tintColor}/>
        ),
    })


    render() {
        return (
            <View>
                <Text>发现</Text>
            </View>
        )
    }
}


export default Discover