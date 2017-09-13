import React from 'react'
import { Platform } from 'react-native'
import { Android_Key, IOS_Key } from '../constans/Url'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../pages/mainPages/Main'
import * as movieCreators from '../actions/Movies'
import Icon from 'react-native-vector-icons/Ionicons'
import codePush from 'react-native-code-push'
import SplashScreen from 'react-native-splash-screen'

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME }

let deploymentKey = Platform.OS === 'ios' ? IOS_Key : Android_Key

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.config = [
            {name: '电影搜索', icon: 'md-search', screen: 'MovieSearch', type: 'direct'},
            {name: '我的位置', icon: 'md-locate', screen: 'Location', type: 'direct'},
            {name: '条码扫描', icon: 'md-qr-scanner',screen: 'Camera', type: 'direct'},
            {name: '程序更新', icon: 'md-arrow-round-up', type: 'action'},
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
        SplashScreen.hide()
        this.props.navigation.setParams({ onMenu: this.showMenu })
        codePush(codePushOptions)
        codePush.sync({
            updateDialog: {
                optionalIgnoreButtonLabel: '稍后',
                optionalInstallButtonLabel: '后台更新',
                optionalUpdateMessage: '程序有新版本了，是否更新？',
                title: '更新',
            },
            deploymentKey: deploymentKey,
        })
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