import * as types from '../constans/ActionTypes'

export function requestHotMovieList() {
    return {
        type: types.REQUEST_HOT_MOVIE_LIST
    }
}

export function fetchHotMovieList(isRefreshing, loading, isLoadMore = false) {
    return {
        type: types.FETCH_HOT_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore
    }
}

export function receiveHotMovieList(hotMovieList) {
    return {
        type: types.RECEIVE_HOT_MOVIE_LIST,
        hotMovieList
    }
}