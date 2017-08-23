import React from 'react';

import {
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native'

class InputText extends React.Component {

    static defaultProps = {
        name: '名称',
        txtHide: '内容',
        ispassword: false,
    }
    constructor (props) {
        super (props)
        this.state = {
            txtValue: "",
        }
    }
    render () {
        var { style, name, txtHide, ispassword } = this.props
        return(
            <View style={styles.container,style}>
                <View style={styles.txtBorder}>
                    <Text style={styles.txtName}>{name}</Text>
                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style={styles.textInput}
                        multiline={false}
                        placeholder={txtHide}
                        password={ispassword}
                        onChangeText={(text) => {
                            this.setState({
                                txtValue: text
                            })
                        }}
                        value={this.state.txtValue}
                    />
                </View>
            </View>
        )
    }
    getValue () {
        return this.state.txtValue
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    txtBorder: {
        height: 35,
        flex: 1,
        borderWidth: 1,
        borderColor: '#32CD32',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        flexDirection: 'row'
    },
    txtName: {
        height: 20,
        width: 40,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 1,
        color: '#32CD32',
        marginRight: 10,
        fontSize: 12
    },
    textInput: {
        height: 50,
        width: 200,
        fontSize: 12
    }
})

export default InputText