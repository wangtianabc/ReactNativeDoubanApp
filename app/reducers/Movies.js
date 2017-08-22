import * as types from '../constans/ActionTypes'

const initState = {
    isRefreshing: false,
    loading: false,
    isLoadMore: false,
    movies: [],
    commingMovies: [],
    usaMovies: [],
    topMovies: []
}

const movieReducer = (state=initState, action) => {
    switch (action.type) {
        case types.FETCH_HOT_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            }
        case types.RECEIVE_HOT_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                movies: action.hotMovieList
            }
        case types.FETCH_COMMING_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            }
        case types.RECEIVE_COMMING_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                commingMovies: action.commingMovieList
            }
        case types.FETCH_USA_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            }
        case types.RECEIVE_USA_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                usaMovies: action.usaMovieList
            }
        case types.FETCH_TOP_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            }
        case types.RECEIVE_TOP_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                topMovies: action.topMovieList
            }
        default:
            return state
    }
}

export default { initState, movieReducer }