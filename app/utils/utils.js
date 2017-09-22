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

/**
 * 时间格式化
 */
export const formatDatebox = (value, formatStr) => {
    if (value === null || value === '') {
        return ''
    }
    var dt
    if (value instanceof Date) {
        dt = value
    } else {
        dt = new Date(value)
    }
    return formateDate(dt, formatStr)
}

const formateDate = (dt, format) => {
    var o = {
        'M+': dt.getMonth() + 1,
        'd+': dt.getDate(),
        'h+': dt.getHours(),
        'm+': dt.getMinutes(),
        's+': dt.getSeconds(),
        'q+': Math.floor((dt.getMonth() + 3) / 3),
        'S': dt.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return format
}