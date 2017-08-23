import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

const Footer = () => (
    <View style={styles.container}>
        <ActivityIndicator size="small" color="32CD32"/>
        <Text style={styles.footerText}>数据加载中...</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10
    }
})

export default Footer