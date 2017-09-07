import React from 'react'
import {
    Text,
    View,
    Platform,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { updateApp } from '../utils/utils'
import { Android_Key, IOS_Key } from '../constans/Url'

let deploymentKey = Platform.OS === 'ios' ? IOS_Key : Android_Key

class Menu extends React.Component {
    heightValue = new Animated.Value(0)
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
        }
    }

    close = () => {
        Animated.spring(this.heightValue, {
            toValue: 0,
            duration: 400,
        }).start(() => this.setState({isShow: false}))
    }

    show = () => {
        this.setState({isShow: true}, () => {
            Animated.spring(this.heightValue, {
                toValue: 1,
                duration: 400,
            }).start()
        })
    }

    onMenuClick(item) {
        if(item.type === 'direct' && item.screen !== undefined) {
            const { navigate } = this.props.navigation
            navigate(item.screen)
        } else if(item.type === 'action'){
            updateApp(deploymentKey)
        }

        this.setState({isShow: false})
    }

    renderMenu = (item, key) => {

        const { config } = this.props

        const isLastItem = key === config.length - 1
        return (
            <TouchableOpacity key={`${item.name}-${key}`} activeOpacity={0.75} style={[styles.menuItem, isLastItem && {borderBottomWidth: 0}]} onPress={() => {this.onMenuClick(item)}}>
                <Icon name={item.icon} size={20} color='#ffffff'/>
                <Text style={{color: '#ffffff', fontSize: 13, marginLeft: 15}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { config } = this.props
        if (!this.state.isShow) {
            return null
        }
        const top = this.heightValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-34 * config.length, 5]
        })

        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={this.close} style={styles.menuWrapper}>
                    <Animated.View style={[styles.menuItemWrapper, {top}]}>
                        {config.map(this.renderMenu)}
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    menuWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: global.gScreen.width,
        height: global.gScreen.height - global.gScreen.navBarHeight,
        justifyContent: 'flex-end',
        zIndex: 1,
    },
    menuItemWrapper: {
        backgroundColor: 'rgba(83, 83, 83, 0.9)',
        position: 'absolute',
        right: 10,
        borderRadius: 4
    },
    menuItem: {
        flexDirection: 'row',
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(255,255,255,0.6)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20
    }
})

export default Menu