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
                    name={'搜索：'}
                    txtHide={'输入歌曲名称'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 35,
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        marginTop: 5
    },
    search: {
        backgroundColor: '#F5F5F5',
        flex:6,
        height:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    city: {
        flex:1,
        height:30,
        marginRight:8,
        justifyContent:'center',
        alignItems:'center',

    }
})

export default SearchView