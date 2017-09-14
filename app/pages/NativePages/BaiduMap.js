import React from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native'
import {
    MapView,
    MapTypes,
} from 'react-native-baidu-map'

var Geolocation = require('Geolocation')

class BaiduMap extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '我的位置',
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>,
    })
    constructor(props) {
        super(props)
        this.state = {
            mapType: MapTypes.NORMAL,
            zoom: 15,
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
        }
    }

    componentWillMount() {
        Geolocation.getCurrentPosition(
            location => {
                this.setState({
                    zoom: 18,
                    markers: [{
                        longitude: parseFloat(location.coords.longitude),
                        latitude: parseFloat(location.coords.latitude),
                        title: 'I am here'
                    }],
                    center: {
                        longitude: parseFloat(location.coords.longitude),
                        latitude: parseFloat(location.coords.latitude),
                    }
                })
            }, error => {alert("获取位置失败："+ error)}
        )
        /*
        let promis = Geolocation.geocode('北京', '鲁谷路').then((data) => {
            this.setState({
                zoom: 18,
                markers: [{
                    longitude: parseFloat(data.longitude),
                    latitude: parseFloat(data.latitude),
                    title: 'I am here'
                }],
                center: {
                    longitude: parseFloat(data.longitude),
                    latitude: parseFloat(data.latitude),
                }
            })
        }).catch((error) => {console.warn(error)})*/
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView trafficEnabled={this.state.trafficEnabled}
                         baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                         zoom={this.state.zoom}
                         mapType={this.state.mapType}
                         center={this.state.center}
                         markers={this.state.markers}
                         style={styles.map}
                         onMarkerClick={(e) => {
                             console.log(JSON.stringify(e))
                         }}
                         onMapClick={(e) => {
                             let json = JSON.stringify(e)
                             this.setState({
                                 zoom: 15,
                                 markers: [{
                                     longitude: e.longitude,
                                     latitude: e.latitude,
                                     title: 'I am here'
                                 }],
                                 center: {
                                     longitude: e.longitude,
                                     latitude: e.latitude,
                                 }
                             })
                         }}
                >

                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    map: {
        width: gScreen.width,
        height: gScreen.height,
    }
})

export default BaiduMap