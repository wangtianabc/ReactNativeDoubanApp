import React from 'react'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import {
    Text,
    StyleSheet,
    Dimensions,
    View,
    ScrollView,
    FlatList
} from 'react-native'
import HotList from './HotList'
import CommingList from './CommingList'

/** Accessing React.PropTypes is no longer supported and will be removed completely in React 16.
const propTypes = {
    movieAction: PropTypes.object,
    movies: PropTypes.array
}
*/
const { width, height } = Dimensions.get('window')

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //console.warn(this.props)
    }

    render() {
        return (
            <View style={styles.mainView} >
                <ScrollableTabView renderTabBar={() => <DefaultTabBar tabStyle={styles.tab} textStyle={styles.tabText} />}

                                   locked={false}
                                   tabBarUnderlineStyle={styles.lineStyle}
                                   tabBarBackgroundColor='#FFFFFF'
                                   tabBarActiveTextColor='#3e9ce9'
                                   tabBarInactiveTextColor='#959595'
                                   >
                    <ScrollView  tabLabel='正在热映'>
                        <HotList { ...this.props }/>
                    </ScrollView>
                    <ScrollView tabLabel='即将上映'>
                        <CommingList/>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        )
    }
}

// Main.propTypes = propTypes

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        marginTop: 20
    },
    tabView: {
        flex: 1,
        padding: 10,
        marginBottom: 50,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 16
    },
    lineStyle: {
        height: 1,
        backgroundColor: '#3e9ce9',
    },
})

export default Main