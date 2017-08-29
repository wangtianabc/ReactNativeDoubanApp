import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const MusicCell = ({ musicItem, onPressHandler }) => (
    <TouchableOpacity onPress={() => onPressHandler(musicItem)}>
        <View style={styles.container}>
            <Image style={styles.itemImage} source={{uri: musicItem.image}}/>
            <View style={styles.itemText}>
                <Text style={styles.authorText}>{(musicItem.author !== undefined && musicItem.author.length > 0) ? musicItem.author[0].name : '无名氏'}</Text>
                <Text style={styles.titleText}>{musicItem.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: (global.gScreen.width - 15 *2 - 10) / 2,
        minHeight: 150,
        flexDirection: 'column',
        backgroundColor: global.gColor.backgroundColor,
        padding: 5,
        marginTop: 10
    },
    itemImage: {
        width: (global.gScreen.width - 15 *2 - 10) / 2 -10,
        height: 100,
    },
    itemText: {
        flex: 1,
        flexDirection: 'row',
        borderTopColor: '#f5f5f5',
        borderTopWidth: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authorText: {
        flex: 1,
        fontSize: 14,
        color: '#A6A6A6',
        fontWeight: 'bold',
        borderRightColor: '#f5f5f5',
        borderRightWidth: 1,
    },
    titleText: {
        flex: 2,
        fontSize: 12,
        color: '#f90'
    }
})

export default MusicCell