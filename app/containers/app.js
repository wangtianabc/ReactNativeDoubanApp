import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeContainer from './HomeContainer'
import MyInfoContainer from './MyInfoContainer'
import BookContainer from './BookContainer'
import ClassicContainer from './ClassicContainer'
import MovieDetail from '../pages/mainPages/MovieWebDetail'
import Detail from '../pages/mainPages/MovieDetail'
import MovieSearch from '../pages/mainPages/MovieSearch'
import DiscoverContainer from './DiscoverContainer'
import AnimatedDemo from '../pages/Animated/Demo1'
import CameraPage from '../pages/NativePages/CameraPlus'
import Location from '../pages/NativePages/BaiduMap'
import CollectionList from '../pages/myPages/CollectionList'

const MainScreenNavigator = TabNavigator(
    {
        Home: {
            screen: HomeContainer
        },
        Classic: {
            screen: ClassicContainer
        },
        Book: {
            screen: BookContainer
        },
        Discover: {
            screen: DiscoverContainer
        },
        MyInfo: {
            screen: MyInfoContainer,
            navigationOptions: {
                title: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="md-person" size={25} color={tintColor}/>
                ),
                headerRight: (
                    <Icon.Button
                        name="md-settings"
                        backgroundColor="transparent"
                        underlayColor="transparent"/>
                ),
            },

        },
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: global.gColor.themeColor,
            inactiveTintColor: '#999999',
            showIcon: true,
            labelStyle: {
                fontSize: 12,
                marginBottom: 5,
            },
            style: {
                backgroundColor: global.gColor.backgroundColor
            },
            indicatorStyle: {
                opacity: 0
            },

        }
    }
)


const App = StackNavigator(
    {
        Main: {
            screen: MainScreenNavigator
        },
        MovieDetail: {
            screen: MovieDetail
        },
        MovieSearch: {
            screen: MovieSearch
        },
        Detail: {
            screen: Detail
        },
        Demo: {
            screen: AnimatedDemo
        },
        Camera: {
            screen: CameraPage
        },
        Location: {
            screen: Location
        },
        CollectionList: {
            screen: CollectionList
        }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: global.gColor.themeColor,
            },
            headerTitleStyle: {
                color: global.gColor.backgroundColor,
                fontSize: 20
            },
            headerTintColor: global.gColor.backgroundColor,
        }
    }
)

export default App