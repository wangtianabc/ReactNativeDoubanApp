import React from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const TopItemCell = ({ item, onPressHandler }) => (
    <TouchableOpacity onPress={() => onPressHandler(item)} style={[styles.topList]}>
        <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <View style={styles.line} ></View>
            <Text style={{paddingLeft:10,paddingRight:10,color:'red',fontSize: 25}}>*****</Text>
            <View style={styles.line} ></View>
        </View>
        <View style={styles.container}>
            <View style={{marginLeft: 15}}>
                <Image style={{width:80,height:110}} source={{uri: item.images.large}}/>
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{fontWeight:"800",fontSize:18}}>
                    {item.title}
                </Text>
                <Text style={styles.smallFont}>导演：{item.directors[0].name}</Text>
                <Text style={styles.smallFont}>主演：{item.casts.map((v) => v.name).join('/')}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    topList: {
        height: 200,
        marginTop: 18,
        paddingLeft: 18,
        paddingRight: 18,
    },
    smallFont:{
        color:'#9B9B9B',
        fontSize:12,
        lineHeight:20
    },
    line: {
        width: 65,
        height: 1,
        backgroundColor: '#DEDEDE'
    },
    container:{
        flex:1,
        marginTop:18,
        marginBottom:15,
        borderWidth:1,
        borderColor:'#CCCCCC',
        borderRadius:2,
        flexDirection:'row',
        alignItems:'center',
        paddingRight:100
    },
})

export default TopItemCell