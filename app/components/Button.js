import React from 'react'
import {
    View,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return Platform.OS === 'ios' ? (
            <TouchableHighlight {... this.props}>{this.props.children}</TouchableHighlight>
        ) : (
            <View {...this.props}><TouchableNativeFeedback onPress={this.props.onPress}>{this.props.children}</TouchableNativeFeedback></View>
        )
    }
}

export default Button