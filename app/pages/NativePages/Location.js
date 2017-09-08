import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
var Geolocation = require('Geolocation')

class Location extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.getLocation}>获取位置</Text>
            </View>
        )
    }


    getLocation = () => {
        Geolocation.getCurrentPosition(
            location => {
                var result = "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp
                alert(result)
            },
            error => {
                alert("获取位置失败："+ error)
            }
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
})

export default Location