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

export function requestUSAMovieList(isRefreshing, loading, isLoadMore, subUrl = '') {
    return {
        type: types.REQUEST_USA_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore,
        subUrl
    }
}

export function fetchUSAMovieList(isRefreshing, loading, isLoadMore = false) {
    return {
        type: types.FETCH_USA_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore
    }
}

export function receiveUSAMovieList(isRefreshing, loading, usaMovieList) {
    return {
        type: types.RECEIVE_USA_MOVIE_LIST,
        isRefreshing,
        loading,
        usaMovieList
    }
}

export function requestTOPMovieList(isRefreshing, loading, isLoadMore, subUrl = '') {
    return {
        type: types.REQUEST_TOP_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore,
        subUrl
    }
}

export function fetchTOPMovieList(isRefreshing, loading, isLoadMore = false) {
    return {
        type: types.FETCH_TOP_MOVIE_LIST,
        isRefreshing,
        loading,
        isLoadMore
    }
}

export function receiveTOPMovieList(isRefreshing, loading, topMovieList) {
    return {
        type: types.RECEIVE_TOP_MOVIE_LIST,
        isRefreshing,
        loading,
        topMovieList
    }
}