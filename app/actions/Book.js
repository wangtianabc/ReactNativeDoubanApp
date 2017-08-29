import * as types from '../constans/ActionTypes'

export function requestBookList(loading, subUrl = '') {
    return {
        type: types.REQUEST_BOOK_LIST,
        loading,
        subUrl
    }
}

export function fetchBookList(loading) {
    return {
        type: types.FETCH_BOOK_LIST,
        loading
    }
}

export function receiveBookList(loading, bookList) {
    return {
        type: types.RECEIVE_BOOK_LIST,
        loading,
        bookList
    }
}