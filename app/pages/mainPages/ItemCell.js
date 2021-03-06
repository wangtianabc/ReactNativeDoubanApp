import React from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const ItemCell = ({ item, onPressHandler }) => (
    <TouchableOpacity onPress={() => onPressHandler(item)}>
        <View style={styles.containerItem}>
            <Image style={styles.itemImg} source={{uri: item.subject === undefined ? item.images.large : item.subject.images.large}}/>
            <View style={styles.itemRightContent}>
                <Text>
                    {item.subject === undefined ? item.title : item.subject.title}
                </Text>
                <View style={styles.itemRightBottom}>
                    <Text style={styles.userName}>
                        {item.subject === undefined ? item.directors[0].name : item.subject.directors[0].name}
                    </Text>
                </View>
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
        width: 88,
        height: 66,
        marginRight: 10
    },
    itemRightContent: {
        flex: 1,
        flexDirection: 'column'
    },
    itemRightBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        flex: 1,
        fontSize: 14,
        marginTop: 5,
        marginRight: 5,
        lineHeight: 20,
        color: '#A6A6A6'
    }
})

export default ItemCell