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
            screen: HomeContainer,
            navigationOptions: {
                title: '电影',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="md-film" size={25} color={tintColor}/>
                ),
                headerRight: (
                    <Icon.Button
                        name="md-add"
                        backgroundColor="transparent"
                        underlayColor="transparent"/>
                )
            }
        },
        Classic: {
            screen: ClassicContainer
        },
        Book: {
            screen: BookContainer,
            navigationOptions: {
                title: '图书',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="md-bookmarks" size={25} color={tintColor}/>
                ),
            }
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
                )
            }
        },
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#32CD32',
            inactiveTintColor: '#999999',
            showIcon: true,
            labelStyle: {
                fontSize: 12,
                marginBottom: 5,
            },
            style: {
                backgroundColor: '#fff'
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
                backgroundColor: '#32CD32'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 20
            },
            headerTintColor: '#fff'
        }
    }
)

export default App