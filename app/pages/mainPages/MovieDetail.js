import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    WebView,
    BackHandler
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LoadingView from '../../components/LoadingView'

let canGoBack = false

class MovieDetail extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.title,
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>,
        headerRight: (
            <Icon.Button
                name="md-share"
                backgroundColor="transparent"
                underlayColor="transparent"/>
        )
    })

    constructor(props) {
        super(props)
    }
    goBack = () => {
        if(canGoBack) {
            this.webView.goBack()
        }
    }

    renderLoading = () => <LoadingView msg={'加载中...'}/>

    onNavigationStateChange = (navState) => {
        canGoBack = navState.canGoBack;
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack)
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref = {(ref) => {
                        this.webView = ref
                    }}
                    style={styles.base}
                    source={{uri: this.props.navigation.state.params.movie.alt}}
                    javaScriptEnabled
                    domStorageEnabled
                    startInLoadingState
                    scalesPageToFit
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={() => {
                        const shouldStartLoad = true;
                        return shouldStartLoad;
                    }}
                    onNavigationStateChange={this.onNavigationStateChange}
                    renderLoading={this.renderLoading}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: global.gColor.backgroundColor,
    },
})
export default MovieDetail