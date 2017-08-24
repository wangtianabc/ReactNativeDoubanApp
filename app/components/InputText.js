import React from 'react';

import {
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class InputText extends React.Component {

    static defaultProps = {
        name: 'md-search',
        txtHide: '内容'
    }
    constructor (props) {
        super (props)
        this.state = {
            txtValue: '',
        }
    }
    render () {
        var { style, name, txtHide, onSearch, onChangeText} = this.props
        return(
            <View style={[styles.container,style]}>
                <View style={styles.txtBorder}>
                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style={styles.textInput}
                        multiline={false}
                        placeholder={txtHide}
                        password={false}
                        onSubmitEditing={onSearch}
                        onChangeText={(text) => {
                            this.setState({ txtValue: text })
                            onChangeText(text)
                        }}
                        value={this.state.txtValue}
                    />
                    <Icon name={name} size={20} style={styles.icon} backgroundColor="transparent" underlayColor="transparent"/>
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
        height: 40,
        flex: 1,
        borderWidth: 1,
        borderColor: '#999999',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        height: 36,
        fontSize: 12,
        marginLeft: 5,
        backgroundColor: '#ffffff'
    }
})

export default InputText