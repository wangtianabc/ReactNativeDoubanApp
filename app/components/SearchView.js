import React from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import InputText from './InputText'
import Icon from 'react-native-vector-icons/FontAwesome'

class SearchView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    render() {
        //const { navigate } = this.props.navigation
        return (
            <View style={styles.header}>
                <InputText
                    name={'md-search'}
                    txtHide={'输入歌曲名称'}
                    isPassword={false}
                    onSearch={this.props.onSearch}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop: 10,
    }
})

export default SearchView