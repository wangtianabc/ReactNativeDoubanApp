import { put, take, call, fork } from 'redux-saga/effects'
import * as types from '../constans/ActionTypes'
import Msg from '../utils/MsgUtil'
import { Douban_Url } from '../constans/Url'
import { Request } from '../utils/RequestUtil'
import { fetchHotMovieList, receiveHotMovieList } from '../actions/Movies'

export function* requestHotMovieList (isRefreshing, loading, isLoadMore, page) {
    try{
        yield put(fetchHotMovieList(isRefreshing, loading, isLoadMore))
        const hotMovieList = yield call(
            Request,
            Douban_Url,
            'get'
        )
        yield  put(receiveHotMovieList(hotMovieList.data))

        const errorMessage = hotMovieList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        }
    } catch (error) {
        yield put(receiveHotMovieList([]))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* wathRequestHotMovieList() {
    while (true) {
        const { isRefreshing, loading, isLoadMore } = yield take(
            types.REQUEST_HOT_MOVIE_LIST
        )
        yield fork(
            requestHotMovieList,
            isRefreshing,
            loading,
            isLoadMore
        )
    }
}