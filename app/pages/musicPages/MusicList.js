import React from 'react'
import {
    ListView,
    StyleSheet,
    RefreshControl
} from 'react-native'

const MusicList = ({ dataSource, isRefreshing, renderItem }) => (
    <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={renderItem}
        enableEmptySections={true}
        style={styles.listView}
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
        backgroundColor: '#eeeeec'
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }
})

export default MusicList