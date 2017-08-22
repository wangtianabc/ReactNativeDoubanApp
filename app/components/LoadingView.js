import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

const LoadingView = () => (
    <View style={styles.loading}>
        <ActivityIndicator size="small" color="#32CD32"/>
        <Text style={styles.loadingText}>数据加载中...</Text>
    </View>
)

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center'
    }
})

export default LoadingView