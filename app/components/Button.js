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
        const { name, onPress } = this.props
        return Platform.OS === 'ios' ? (
            <View {...this.props}><TouchableHighlight onPress={() => onPress(name)}>{this.props.children}</TouchableHighlight></View>
        ) : (
            <View {...this.props}><TouchableNativeFeedback onPress={() => onPress(name)}>{this.props.children}</TouchableNativeFeedback></View>
        )
    }
}

export default Button