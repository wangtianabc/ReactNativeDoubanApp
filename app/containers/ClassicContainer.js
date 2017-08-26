import React from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchView from '../components/SearchView'
import Music from '../pages/musicPages/Music'
import Icon from 'react-native-vector-icons/Ionicons'
import * as musicCreators from '../actions/Music'


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
        //debugger
        //console.log(this.refs)
        this.refs.musicList.searchAction()
    }

    componentDidMount(){
        this.props.navigation.setParams({ searchPress: this.onSearch })
    }

    render() {
        return (
            <View>
                <View>
                    {this.state.search ? <SearchView ref="test" onSearch={this.hideSearch} onChangeText={this.onChangeText}/> : null}
                </View>
                <View>
                    <Music { ...this.props } songName={this.state.searchValue} ref="musicList"/>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    const { music } = state
    return {
        music
    }
}

const mapDispatchToProps = (dispatch) => {
    const musicAction = bindActionCreators(musicCreators, dispatch)
    return {
        musicAction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassicContainer)