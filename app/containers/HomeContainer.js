import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../pages/mainPages/Main'
import * as movieCreators from '../actions/Movies'
import Icon from 'react-native-vector-icons/Ionicons'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.config = [
            {name: '电影搜索', icon: 'md-search', screen: 'MovieSearch'},
            {name: '我的位置', icon: 'md-locate'},
            {name: '条码扫描', icon: 'md-qr-scanner'},
        ]
    }
    static navigationOptions = ({navigation}) => ({
        title: '电影',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-film" size={25} color={tintColor}/>
        ),
        headerRight: (
            <Icon.Button
                name="md-add"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.onMenu() //在这里不能使用this
                }}
            />
            ),
    })

    showMenu = () => {
        this.refs.main.showMenu()
    }

    componentDidMount(){
        this.props.navigation.setParams({ onMenu: this.showMenu })
    }

    render() {
        return <Main { ...this.props } ref='main' config={this.config}/>
    }
}

const mapStateToProps = (state) => {
    const { movie } = state
    return {
        movie
    }
}

const mapDispatchToProps = (dispatch) => {
    const movieAction = bindActionCreators(movieCreators, dispatch)
    return {
        movieAction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)