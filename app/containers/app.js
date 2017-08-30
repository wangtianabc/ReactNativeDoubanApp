import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeContainer from './HomeContainer'
import MyInfoContainer from './MyInfoContainer'
import BookContainer from './BookContainer'
import ClassicContainer from './ClassicContainer'
import MovieDetail from '../pages/mainPages/MovieDetail'

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