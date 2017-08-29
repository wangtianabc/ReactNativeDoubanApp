import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Button from './Button'
import px2dp from '../utils/utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const itemHeight = px2dp(45)

const Font = {
    Ionicons,
    FontAwesome
}

class ItemButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Button style={{marginTop: this.props.first ? 10: 0}} onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Text style={{color: this.props.color||"#f00"}}>{this.props.name}</Text>
                </View>
            </Button>
        )
    }
}

export default class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    renderContent = () => {
        let { icon, iconSize, name, subName, color, first, avatar, disable, font } = this.props
        font = font || "Ionicons"
        const Icon = Font[font]
        return (
            <View style={styles.listItem}>
                {icon ? <Icon name={icon} size={px2dp(iconSize||20)} style={{width: 22, marginRight:5, textAlign:"center"}} color={color || global.gColor.themeColor}/> : null}
                <View style={[styles.listInfo, {borderTopWidth: !first ? 1: 0}]}>
                    <View style={{flex: 1}}><Text>{name}</Text></View>
                    <View style={styles.listInfoRight}>
                        {subName ? <Text style={{color: '#aaa', fontSize: 12}}>{subName}</Text> : null}
                        {avatar ? <Image source={avatar} style={{width: 36, height: 36, resizeMode: 'cover', overflow:"hidden", borderRadius: 18}} /> : null}
                        {disable ? null : <Font.Ionicons style={{marginLeft: 10}} name="ios-arrow-forward-outline" size={px2dp(18)} color="#bbb"/>}
                    </View>
                </View>
            </View>
        )
    }

    render() {
        let { onPress, first, disable } = this.props
        onPress = onPress || (() => {})
        return disable ? this.renderContent() : <Button style={{marginTop: first? 10 : 0}} onPress={onPress}>{this.renderContent()}</Button>
    }
}

Item.Button = ItemButton

const styles = StyleSheet.create({
    listItem: {
        height: itemHeight,
        paddingLeft: 16,
        backgroundColor: global.gColor.backgroundColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listInfo: {
        height: itemHeight,
        flex: 1,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: '#f5f5f5'
    },
    listInfoRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        height: itemHeight,
        backgroundColor: global.gColor.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

