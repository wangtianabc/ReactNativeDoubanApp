import { put, take, call, fork } from 'redux-saga/effects'
import * as types from '../constans/ActionTypes'
import Msg from '../utils/MsgUtil'
import { Douban_Url } from '../constans/Url'
import { Request } from '../utils/RequestUtil'
import {
    fetchMusicList,
    receiveMusicList,
} from '../actions/Music'

export function* requestMusicList (loading, subUrl) {
    try{
        yield put(fetchMusicList(loading))

        const musicList = yield call(
            Request,
            Douban_Url + subUrl,
            'get'
        )
        const errorMessage = musicList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {
            yield  put(receiveMusicList(false, musicList.musics))
        }
    } catch (error) {
        yield put(receiveMusicList(false, []))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestMusicList() {
    while (true) {
        const { loading, subUrl } = yield take(
            types.REQUEST_MUSIC_LIST
        )
        yield fork(
            requestMusicList,
            loading,
            subUrl
        )
    }
}