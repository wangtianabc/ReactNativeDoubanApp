import React from 'react'
import {
  AppRegistry,
  View,
  Button,
  Text,
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

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
  class RecentChatsScreen extends React.Component {
    render() {
      return <Text>List of recent chats</Text>
    }
  }
  
  class AllContactsScreen extends React.Component {
    render() {
      return <Text>List of all contacts</Text>
    }
  }

  const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
  })

  MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
  }

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
})

export default App