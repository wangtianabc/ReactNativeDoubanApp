import React from 'react'
import {
    Text,
    View,
    Image,
    Modal,
    StyleSheet,
    WebView,
    TouchableOpacity,
    BackHandler,
    TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LoadingView from '../../components/LoadingView'
import * as WeChat from 'react-native-wechat'
import ToastUtil from '../../utils/MsgUtil'
import { formatStringWithHtml } from '../../utils/utils'

let canGoBack = false
WeChat.registerApp('1234567890') //必须注册微信ID

class MovieDetail extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.title,
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>,
        headerRight: (
            <Icon.Button
                name="md-share"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {navigation.state.params.handleShare()}}
            />
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            showShare: false
        }
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
        this.props.navigation.setParams({ handleShare: this.onShare })
        BackHandler.addEventListener('hardwareBackPress', this.goBack)
    }

    onShare = () => {
        this.setState({showShare: true})
    }

    renderShare = () => {
        const { params } = this.props.navigation.state
        return (
            <TouchableWithoutFeedback onPress={() => {this.setState({showShare: false})}}>
                <View key={'spinner'} style={styles.spinner}>
                    <View style={styles.spinnerContent}>
                        <Text
                            style={[styles.spinnerTitle, { fontSize: 20, color: 'black' }]}
                        >
                            分享到
                        </Text>
                        <View style={styles.shareParent}>
                            <TouchableOpacity
                                style={styles.base}
                                onPress={() => {
                                    WeChat.isWXAppInstalled().then((isInstalled) => {
                                        debugger
                                        if (isInstalled) {
                                            WeChat.shareToSession({
                                                title: formatStringWithHtml(params.movie.title),
                                                description: '分享自：iReading',
                                                thumbImage: params.movie.images.large,
                                                type: 'news',
                                                webpageUrl: params.movie.alt
                                            }).catch((error) => {
                                                ToastUtil.showShort(error.message, true)
                                            });
                                        } else {
                                            ToastUtil.showShort('没有安装微信软件，请您安装微信之后再试', true)
                                        }
                                    });
                                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image style={styles.shareIcon} source={require('../../img/share_icon_wechat.png')} />
                                    <Text style={styles.spinnerTitle}>微信</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.base}
                                onPress={() => {
                                    WeChat.isWXAppInstalled().then((isInstalled) => {
                                        if (isInstalled) {
                                            WeChat.shareToTimeline({
                                                title: formatStringWithHtml(
                                                    `[@iReading]${params.movie.title}`
                                                ),
                                                thumbImage: params.movie.images.large,
                                                type: 'news',
                                                webpageUrl: params.movie.alt
                                            }).catch((error) => {
                                                ToastUtil.showShort(error.message, true);
                                            });
                                        } else {
                                            ToastUtil.showShort('没有安装微信软件，请您安装微信之后再试', true);
                                        }
                                    });
                                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image style={styles.shareIcon} source={require('../../img/share_icon_moments.png')} />
                                    <Text style={styles.spinnerTitle}>朋友圈</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack)
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal animationType="fade"
                       visible={this.state.showShare}
                       transparent
                       onRequestClose={() => {
                           this.setState({showShare: false})
                       }}
                >
                    {this.renderShare()}
                </Modal>
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
                        const shouldStartLoad = true
                        return shouldStartLoad
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
    spinner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
    },
    spinnerContent: {
        justifyContent: 'center',
        width: gScreen.width * (7 / 10),
        height: gScreen.width * (7 / 10) * 0.68,
        backgroundColor: '#fcfcfc',
        padding: 20,
        borderRadius: 5
    },
    spinnerTitle: {
        fontSize: 18,
        color: '#313131',
        textAlign: 'center',
        marginTop: 5
    },
    shareParent: {
        flexDirection: 'row',
        marginTop: 20
    },
    shareContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareIcon: {
        width: 40,
        height: 40
    }
})
export default MovieDetail