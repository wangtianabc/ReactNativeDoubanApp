import * as types from '../constans/ActionTypes'

const initState = {
    isRefreshing: false,
    loading: false,
    isLoadMore: false,
    movies: []
}

const movieReducer = (state=initState, action) => {
    switch (action.type) {
        case types.FETCH_HOT_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore }
        case types.RECEIVE_HOT_MOVIE_LIST:
            return {
                ...state,
                isRefreshing: false,
                isLoadMore: false,
                movies: action.movies
            }
        default:
            return state
    }
}

export default { initState, movieReducer }