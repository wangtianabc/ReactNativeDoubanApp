import { put, take, call, fork } from 'redux-saga/effects'
import * as types from '../constans/ActionTypes'
import Msg from '../utils/MsgUtil'
import { Douban_Music_Url } from '../constans/Url'
import { Request } from '../utils/RequestUtil'
import {
    fetchBookList,
    receiveBookList,
} from '../actions/Book'

export function* requestBookList (loading, subUrl) {
    try{
        yield put(fetchBookList(loading))

        const bookList = yield call(
            Request,
            Douban_Music_Url + subUrl,
            'get'
        )
        const errorMessage = bookList.msg
        if (errorMessage && errorMessage !=='') {
            yield Msg.showShort(errorMessage)
        } else {
            yield  put(receiveBookList(false, bookList.books))
        }
    } catch (error) {
        yield put(receiveBookList(false, []))
        Msg.showShort('未取到数据，请重试')
    }
}

export function* watchRequestBookList() {
    while (true) {
        const { loading, subUrl } = yield take(
            types.REQUEST_BOOK_LIST
        )
        yield fork(
            requestBookList,
            loading,
            subUrl
        )
    }
}