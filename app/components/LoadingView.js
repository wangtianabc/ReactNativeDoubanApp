import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

const LoadingView = ({msg = '加载中...', size = 'large', color = '#32CD32'}) => (
    <View style={styles.loading}>
        <ActivityIndicator size={size} color={color}/>
        <Text style={styles.loadingText}>{msg}</Text>
    </View>
)

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center'
    }
})

export default LoadingView