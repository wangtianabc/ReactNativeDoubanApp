import React from 'react'
import {
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class BookContainer extends React.Component {
    static navigationOptions = {
        title: '图书',
        tabBarIcon: ({ tintColor }) =>
        <Icon name="md-bookmarks" size={25} color={tintColor} />
    }

    render() {
        return <Text>List of all books</Text>
    }
}

export default BookContainer