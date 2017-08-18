import React from 'react'
import {
  AppRegistry,
  View,
  Button,
  Text,
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeContainer from './HomeContainer'
import MyInfoContainer from './MyInfoContainer'
import BookContainer from './BookContainer'
import ClassicContainer from './ClassicContainer'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    const { navigate } = this.props.navigation
    return (
        <View>
            <Text>Hello, Navigation!</Text>
            <Button
                onPress = { () => navigate('Chat') }
                title = "Chat"/>
        </View>
    )
  }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
      title: 'Chat with Lucy',
    }
    render() {
      return (
        <View>
          <Text>Chat with Lucy</Text>
        </View>
      )
    }
  }
  

const MainScreenNavigator = TabNavigator(
    {
        Home: { screen: HomeContainer },
        Classic: { screen: ClassicContainer },
        Book: { screen: BookContainer},
        MyInfo: { screen: MyInfoContainer },
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    }
)


const App = StackNavigator({
  Main: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
})

export default App