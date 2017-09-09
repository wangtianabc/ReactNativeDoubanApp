import React from 'react'
import {
    Text,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import GridLayout from '../pages/discoverPages/GridLayout'

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
        return <GridLayout {...this.props}/>
    }
}


export default DiscoverContainer