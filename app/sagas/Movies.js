import { put, take, call, fork } from 'redux-saga/effects'
import * as types from '../constans/ActionTypes'
import Msg from '../utils/MsgUtil'
import { Douban_Url } from '../constans/Url'
import { Request } from '../utils/RequestUtil'
import {
    fetchHotMovieList,
    receiveHotMovieList,
    fetchCommingMovieList,
    receiveCommingMovieList,
    fetchUSAMovieList,
    receiveUSAMovieList,
    fetchTOPMovieList,
    receiveTOPMovieList,
    fetchMovieSearch,
    receiveMovieSearch
} from '../actions/Movies'

export function* requestHotMovieList (isRefreshing, loading, isLoadMore, subUrl) {
    try{
        yield put(fetchHotMovieList(isRefreshing, loading, isLoadMore))

        const hotMovieList = yield call(
            Request,
            Douban_Url + subUrl,
            'get'
        )

        const errorMessage = hotMovieList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {
            yield  put(receiveHotMovieList(false, false,  hotMovieList.subjects))
        }
    } catch (error) {
        yield put(receiveHotMovieList(false, false, []))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestHotMovieList() {
    while (true) {
        const { isRefreshing, loading, isLoadMore, subUrl } = yield take(
            types.REQUEST_HOT_MOVIE_LIST
        )
        yield fork(
            requestHotMovieList,
            isRefreshing,
            loading,
            isLoadMore,
            subUrl
        )
    }
}

export function* requestCommingMovieList (isRefreshing, loading, isLoadMore, subUrl) {
    try{
        yield put(fetchCommingMovieList(isRefreshing, loading, isLoadMore))
        const commingMovieList = yield call(
            Request,
            Douban_Url + subUrl,
            'get'
        )
        const errorMessage = commingMovieList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {
            yield  put(receiveCommingMovieList(false, false,  commingMovieList.subjects))
        }
    } catch (error) {
        yield put(receiveCommingMovieList(false, false, []))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestCommingMovieList() {
    while (true) {
        const { isRefreshing, loading, isLoadMore, subUrl } = yield take(
            types.REQUEST_COMMING_MOVIE_LIST
        )
        yield fork(
            requestCommingMovieList,
            isRefreshing,
            loading,
            isLoadMore,
            subUrl
        )
    }
}

export function* requestUSAMovieList (isRefreshing, loading, isLoadMore, subUrl) {
    try{
        yield put(fetchUSAMovieList(isRefreshing, loading, isLoadMore))
        const usaMovieList = yield call(
            Request,
            Douban_Url + subUrl,
            'get'
        )
        const errorMessage = usaMovieList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {
            yield  put(receiveUSAMovieList(false, false,  usaMovieList.subjects))
        }
    } catch (error) {
        yield put(receiveUSAMovieList(false, false, []))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestUSAMovieList() {
    while (true) {
        const { isRefreshing, loading, isLoadMore, subUrl } = yield take(
            types.REQUEST_USA_MOVIE_LIST
        )
        yield fork(
            requestUSAMovieList,
            isRefreshing,
            loading,
            isLoadMore,
            subUrl
        )
    }
}

export function* requestTOPMovieList (isRefreshing, loading, isLoadMore, subUrl) {
    try{
        yield put(fetchTOPMovieList(isRefreshing, loading, isLoadMore))
        const topMovieList = yield call(
            Request,
            Douban_Url + subUrl,
            'get'
        )
        const errorMessage = topMovieList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {
            yield  put(receiveTOPMovieList(false, false,  topMovieList.subjects))
        }
    } catch (error) {
        yield put(receiveTOPMovieList(false, false, []))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestTOPMovieList() {
    while (true) {
        const { isRefreshing, loading, isLoadMore, subUrl } = yield take(
            types.REQUEST_TOP_MOVIE_LIST
        )
        yield fork(
            requestTOPMovieList,
            isRefreshing,
            loading,
            isLoadMore,
            subUrl
        )
    }
}

export function* requestMovieSearch (loading, subUrl, isRefreshing, isLoadMore) {
    try{
        yield put(fetchMovieSearch(loading, isRefreshing, isLoadMore))
        const resultMovies = yield call(
            Request,
            Douban_Url + subUrl,
            'get'
        )
        const errorMessage = resultMovies.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {

            const movies = resultMovies.subjects

            if (movies !== undefined && movies.length > 0) {
                /*指定每个元素的key，消除virtualizedList 的key警告*/
                for (var i=0; i<movies.length; i++) {
                    var obj = {'key': movies[i].id}
                    Object.assign(movies[i], obj)
                }
            }

            yield  put(receiveMovieSearch(false, movies, resultMovies.total, false, false))
        }
    } catch (error) {
        yield put(receiveTOPMovieList(false, [], 0, false, false))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestMovieSearch() {
    while (true) {
        const { loading, subUrl, isRefreshing, isLoadMore } = yield take(
            types.REQUEST_MOVIE_SEARCH
        )
        yield fork(
            requestMovieSearch,
            loading,
            subUrl,
            isRefreshing,
            isLoadMore
        )
    }
}