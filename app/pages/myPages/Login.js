import React from 'react'
import t from 'tcomb-form-native'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native'

let Form = t.form.Form
let Gender = t.enums({
    M: 'Male',
    F: 'Female'
})
let Person = t.struct({
    '姓名': t.String,
    surname: t.maybe(t.String),
    age: t.Number,
    birthDate: t.Date,
    gender: Gender,
    rememberMe: t.Boolean
})

let options = {
    fields: {
        birthDate: {
            config:{
                format: (date) => {return date.toLocaleString()},

            }

        }
    }

}

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    onSummit = () => {
        let value = this.refs.login.getValue()
        console.log(value)
    }
    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref='login'
                    type={Person}
                    options={options}
                />
                <TouchableHighlight style={styles.LoginButton} onPress={this.onSummit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        height: gScreen.height,
        padding: 20,
        backgroundColor: gColor.backgroundColor
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    LoginButton: {
        height: 36,
        backgroundColor: gColor.themeColor,
        borderColor: gColor.themeColor,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})

export default Login