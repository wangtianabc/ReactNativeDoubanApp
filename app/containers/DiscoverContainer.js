import React from 'react'
import {
    Text,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Discover from '../pages/discoverPages/Discover'

class DiscoverContainer extends React.Component {
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
        return <Discover/>
    }
}


export default DiscoverContainer