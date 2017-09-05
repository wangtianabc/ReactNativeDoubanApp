import axios from 'axios'
import Msg from './MsgUtil'

axios.defaults.timeout = 20000
axios.defaults.withCredentials = true

axios.interceptors.response.use(res => {
    if(res.status === 654 ) {
        Msg.showShort('请求超时！')
    }
    if(res.status !== 200) {
        Msg.showShort('数据返回有误')
    }
    return res
}, (error) => {
    return Promise.reject(error)
})

export default axios