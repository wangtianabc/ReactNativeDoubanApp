import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const BookCell = ({bookItem, onPressHandler}) => (
    <TouchableOpacity onPress={() => onPressHandler(bookItem)}>
        <View style={styles.containerItem}>
            <Image style={styles.itemImg} source={{uri: bookItem.images.large}}/>
            <View style={styles.itemRightContent}>
                <Text style={styles.title}>
                    {bookItem.title}
                </Text>
                <Text style={styles.userName}>
                    发行人: {bookItem.publisher}
                </Text>
                <Text style={styles.userName}>
                    出版日期: {bookItem.pubdate}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.gColor.backgroundColor,
        padding: 10,
        borderBottomColor: global.gColor.border,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    itemImg: {
        width: 61.8,
        height: 100,
        marginRight: 10
    },
    itemRightContent: {
        flex: 1,
        flexDirection: 'column'
    },
    userName: {
        fontSize: 14,
        marginTop: 5,
        marginRight: 5,
        lineHeight: 20,
        color: '#A6A6A6'
    }
})

export default BookCell