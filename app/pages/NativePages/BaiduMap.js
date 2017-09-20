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
    Geolocation,
} from 'react-native-baidu-map'

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
        Geolocation.getCurrentPosition().then(position => {
            this.setState({
                zoom: 18,
                center: {
                    longitude: position.longitude,
                    latitude: position.latitude
                },
                markers: [
                    {
                        longitude: position.longitude,
                        latitude: position.latitude,
                        title: `我的位置: ${position.address}`
                    }
                ]
            })
        }).catch(err => {alert('获取位置信息失败！' + err)})
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
                                     title: '想去这里'
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