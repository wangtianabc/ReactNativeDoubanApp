import React from 'react'
import {
    View,
    ListView,
    ScrollView,
    StyleSheet
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import BookCell from './BookCell'
import ItemListView from '../mainPages/ItemListView'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    onPress = (movie) => {
        const { navigate } = this.props.navigation
        navigate('MovieDetail', {movie})
    }

    searchAction = () => {
        const { bookAction} = this.props
        bookAction.receiveBookList(false, [])
        bookAction.requestBookList(true, '/book/search?q=' + this.props.bookName)

    }

    renderItem = book =>
        <BookCell bookItem={book} onPressHandler={this.onPress} />

    renderContent = () => {
        const { book } = this.props
        if (book.loading) {
            return <LoadingView msg={ '图书加载中...' } style={styles.loading}/>
        }

        return (
            <ItemListView
                dataSource={this.state.dataSource.cloneWithRows(book.books)}
                isRefreshing={false}
                renderItem={this.renderItem}/>
        )
    }

    render() {
        return (
            <ScrollView style={styles.screen}>
                <View>
                    {this.renderContent()}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        width: global.gScreen.width,
        height: global.gScreen.height,
    }
})

export default Book