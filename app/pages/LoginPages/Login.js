import React from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: ''
        }
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gColor.backgroundColor
    }
})

export default Login