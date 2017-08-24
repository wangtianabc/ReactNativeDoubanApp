import React from 'react'
import {
    Text
} from 'react-native'
import SearchView from '../components/SearchView'
import Icon from 'react-native-vector-icons/Ionicons'

class ClassicContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: true,
            searchValue: '',
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: '音乐',
        tabBarIcon: ({tintColor}) => (
                <Icon name="md-musical-notes" size={25} color={tintColor}/>
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

    onSearch = () => {
        this.setState({ search: true })
    }

    onChangeText = (text) => {
        this.setState({ searchValue: text })
    }

    hideSearch = () => {
        this.setState({ search: false })
        alert(this.state.searchValue)
    }

    componentDidMount(){
        this.props.navigation.setParams({ searchPress: this.onSearch })
    }

    render() {
        return (
            this.state.search ? <SearchView onSearch={this.hideSearch} onChangeText={this.onChangeText}/> : null
        )
    }
}

export default ClassicContainer