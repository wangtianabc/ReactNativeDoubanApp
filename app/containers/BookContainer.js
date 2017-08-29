import React from 'react'
import {
    Text,
    View
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import SearchView from '../components/SearchView'
import Book from '../pages/bookPages/Book'
import * as bookCreators from '../actions/Book'

class BookContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: false,
            searchValue: ''
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: '图书',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-bookmarks" size={25} color={tintColor}/>
        ),
        headerRight:(
            <Icon.Button
                name="md-search"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.searchPress() //在这里不能使用this
                }}
            />
        )
    })

    componentDidMount(){
        this.props.navigation.setParams({ searchPress: this.onSearch })
    }

    onSearch = () => {
        this.setState({search: !this.state.search})
    }

    hideSearch = () => {
        this.setState({search: false})
        this.refs.bookList.searchAction()
    }

    onChangeText = (text) => {
        this.setState({ searchValue: text })
    }

    render() {
        return (
            <View>
                <View>
                    {this.state.search ? <SearchView onSearch={this.hideSearch} onChangeText={this.onChangeText} holdText={'请输入图书名称'}/> : null}
                </View>
                <View>
                    <Book { ...this.props } bookName={this.state.searchValue} ref="bookList"/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { book } = state
    return {
        book
    }
}

const mapDispatchToProps = (dispatch) => {
    const bookAction = bindActionCreators(bookCreators, dispatch)
    return {
        bookAction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)