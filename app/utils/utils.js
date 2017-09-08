import codePush from 'react-native-code-push'
import Msg from '../utils/MsgUtil'

const basePx = 375

export function px2dp(px){
    return px * gScreen.width/basePx
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
                    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                        Msg.showShort('正在下载更新文件...')
                    case codePush.SyncStatus.INSTALLING_UPDATE:
                        Msg.showShort('已下载完成，正在安装')
                    case codePush.SyncStatus.UPDATE_INSTALLED:
                        Msg.showShort('已完成安装')
                }
            })
        }
    }).catch((error) => {
        Msg.showShort('更新错误：' + error)
    })
}

export const formatStringWithHtml = (originString) => {
    if (originString === undefined) {
        return ''
    }
    const newString = originString
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    return newString
}