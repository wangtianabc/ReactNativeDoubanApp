import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.city}>
                    <Text>北京<Icon name="chevron-down" size={10} color="#222222" onPress={() => alert('还没做，别点了！')}/></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.search}>
                    <Text style={styles.input}><Icon name="search" size={10} color="#8b8b8b"/>电影</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 35,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight : 20,
    },
    city: {
        flex: 1,
        height: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        backgroundColor: '#F5F5F5',
        flex: 6,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        textAlign: 'center',
        lineHeight: 25,
        color: '#8b8b8b'
    }
})

export default SearchInput