import { Dimensions } from 'react-native'
import codePush from 'react-native-code-push'

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width
import Msg from '../utils/MsgUtil'

const basePx = 375

export function px2dp(px){
    return px * deviceW/basePx
}

export function updateApp (deploymentKey) {
    codePush.checkForUpdate(deploymentKey).then((update) => {
        if(!update) {
            Msg.showShort('已是最新版本！')
        }else{
            codePush.sync({
                deploymentKey: deploymentKey,
                updateDialog: {
                    optionalIgnoreButtonLabel: '稍后',
                    optionalInstallButtonLabel: '立即更新',
                    optionalUpdateMessage: '有新版本了，是否更新？',
                    title: '更新提示'
                },
                installMode: codePush.InstallMode.IMMEDIATE,
            },(status) => {
                switch (status) {
                    case codePush.SyncStatus.INSTALLING_UPDATE:
                        Msg.showShort('已下载完成，正在安装')
                    case codePush.SyncStatus.UPDATE_INSTALLED:
                        Msg.showShort('已完成安装')
                }
            })
        }
    }).catch((error) => {
        console.log(error)
    })
}