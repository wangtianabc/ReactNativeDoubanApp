import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native'

const ErrorView = ({ read, typeId, onRefresh }) =>
    (<ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={false}
        contentContainerStyle={styles.no_data}
        style={styles.base}
        refreshControl={
            <RefreshControl
                style={styles.refreshControlBase}
                refreshing={read.isRefreshing}
                onRefresh={() => onRefresh(typeId)}
                title="Loading..."
                colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
            />
        }
    >
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>目前没有数据，请刷新重试……</Text>
        </View>
    </ScrollView>)

const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    no_data: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }
})

export default ErrorView