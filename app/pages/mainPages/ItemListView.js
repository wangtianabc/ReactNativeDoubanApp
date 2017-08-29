import React from 'react'
import {
    ListView,
    StyleSheet,
    RefreshControl
} from 'react-native'

const ItemListView = ({
    dataSource,
    isRefreshing,
    renderItem
}) => (
    <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={renderItem}
        style={styles.listView}
        enableEmptySections = {true}
        refreshControl={
            <RefreshControl
                style={styles.refreshControlBase}
                refreshing={isRefreshing}
                title="loading..."
                colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}/>
        }/>

)

const styles = StyleSheet.create({
    listView: {
        backgroundColor: global.gColor.backgroundColor
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }
})

export default ItemListView