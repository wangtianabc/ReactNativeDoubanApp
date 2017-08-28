import React from 'react'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList
} from 'react-native'
import HotList from './HotList'
import CommingList from './CommingList'
import USAList from './USAList'
import Top250 from './Top250'
import SearchView from '../../components/SearchView'

/** Accessing React.PropTypes is no longer supported and will be removed completely in React 16.
const propTypes = {
    movieAction: PropTypes.object,
    movies: PropTypes.array
}
*/

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
                                   tabBarActiveTextColor='#32CD32'
                                   tabBarInactiveTextColor='#959595'
                                   >
                    <ScrollView  tabLabel='正在热映'>
                        <HotList { ...this.props }/>
                    </ScrollView>
                    <ScrollView tabLabel='即将上映'>
                        <CommingList {...this.props}/>
                    </ScrollView>
                    <ScrollView tabLabel='北美票房'>
                        <USAList {...this.props}/>
                    </ScrollView>
                    <ScrollView tabLabel='TOP250'>
                        <Top250 {...this.props}/>
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
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 16
    },
    lineStyle: {
        height: 1,
        backgroundColor: '#32CD32',
    },
})

export default Main