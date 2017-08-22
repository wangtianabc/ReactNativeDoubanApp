import * as types from '../constans/ActionTypes'

export function requestHotMovieList(isRefreshing, loading, isLoadMore, subUrl = '') {
    return {
        type: types.REQUEST_HOT_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore,
        subUrl
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

export function receiveHotMovieList(isRefreshing, loading, hotMovieList) {
    return {
        type: types.RECEIVE_HOT_MOVIE_LIST,
        isRefreshing,
        loading,
        hotMovieList
    }
}

export function requestCommingMovieList(isRefreshing, loading, isLoadMore, subUrl = '') {
    return {
        type: types.REQUEST_COMMING_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore,
        subUrl
    }
}

export function fetchCommingMovieList(isRefreshing, loading, isLoadMore = false) {
    return {
        type: types.FETCH_COMMING_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore
    }
}

export function receiveCommingMovieList(isRefreshing, loading, commingMovieList) {
    return {
        type: types.RECEIVE_COMMING_MOVIE_LIST,
        isRefreshing,
        loading,
        commingMovieList
    }
}