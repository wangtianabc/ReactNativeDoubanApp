import React from 'react'
import t from 'tcomb-form-native'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native'
import { formatDatebox } from '../../utils/utils'

let Form = t.form.Form
let Gender = t.enums({
    M: '男',
    F: '女'
})
let Person = t.struct({
    name: t.String,
    age: t.Number,
    birthDate: t.Date,
    gender: Gender,
    rememberMe: t.Boolean
})

let options = {
    auto: 'placeholders',
    fields: {
        name: {
            label: '姓名：',
            placeholder: '真实姓名',
            help: 'Your help message here'
        },
        age: {
            label: '年龄：'
        },
        birthDate: {
            config:{
                format: (date) => {return formatDatebox(date,'yyyy-MM-dd')}
            },
            label: '生日：'
        },
        gender: {
            label: '性别：',
            nullOption: {value: '', text: 'Choose your gender'}
        },
        rememberMe: {
            label: '记住我：'
        }
    }

}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {
                name: '',
                age: '',
                birthDate: ''
            }
        }
    }

    onChange = (value) => {
        this.setState({value})
    }

    clearForm() {
        this.setState({ values: null })
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
                    //value={this.state.values}
                    //onChange={this.onChange}
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
        backgroundColor: '#F3F3F3'
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