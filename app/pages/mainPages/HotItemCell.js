import React from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Star from '../../components/Star'

const HotItemCell = ({ item, onPressHandler }) => (
    <TouchableOpacity onPress={() => onPressHandler(item)} style={[styles.hotList]}>
        <View style={{flex: 1}}>
            <Image style={styles.itemImg} source={{uri: item.images.large}}/>
        </View>
        <View style={{flex: 2, alignItems: 'flex-start'}}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <View style={{marginTop: 3, marginBottom: 3}}>
                <Star value={item.rating.stars}/>
            </View>
            <Text style={styles.smallFont}>导演：{item.directors[0].name}</Text>
            <Text style={styles.smallFont}>主演：{item.casts.map((v) => v.name).join('/')}</Text>
            <Text style={styles.sawFont}>{item.collect_count}人看过</Text>
        </View>
        <View style={{flex: 0}}>
            <TouchableOpacity onPress={() => alert('付钱:'+item.id)} style={styles.ticket}>
                <Text style={{color: '#ED9121', fontWeight: '900'}}>购票</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    hotList: {
        height: 130,
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    },
    title: {
        fontWeight: '900',
        fontSize: 16
    },
    itemImg: {
        width: 80,
        height: 100,
        marginRight: 10
    },
    smallFont: {
        lineHeight: 20,
        color: '#A6A6A6',
        fontSize: 12
    },
    sawFont: {
        lineHeight: 20,
        fontSize: 13
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
    ticket: {
        width: 50,
        height: 25,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ED9121',
        borderRadius: 5,
    }
})

export default HotItemCell