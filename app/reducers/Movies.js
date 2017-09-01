import * as types from '../constans/ActionTypes'

const initState = {
    isRefreshing: false,
    loading: false,
    isLoadMore: false,
    movies: [],
    commingMovies: [],
    usaMovies: [],
    topMovies: [],
    resultMovies: [],
    loadMore: false,
    total: 0
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
        case types.FETCH_MOVIE_SEARCH:
            return {
                ...state,
                loading: action.loading,
                isRefreshing: action.isRefreshing,
                isLoadMore: action.isLoadMore
            }
        case types.RECEIVE_MOVIE_SEARCH:
            return {
                ...state,
                loading: action.loading,
                total: action.total,
                isRefreshing: action.isRefreshing,
                isLoadMore: action.isLoadMore,
                loadMore: haveMore(state, action),
                resultMovies: state.isLoadMore ? concatMovies(state, action) : action.resultMovies,
            }
        default:
            return state
    }
}

const haveMore = (state, action) => {

    let currentMovies = concatMovies(state, action)
    if(currentMovies.length > 10 && currentMovies.length < action.total) {
        return true
    }else {
        return false
    }
}

const concatMovies = (state, action) => {
    const set = new Set(state.resultMovies.map(item => item.id))
    if(state.resultMovies.length === 0) {
        return action.resultMovies
    }
    const filterArr = []
    for(let movie of action.resultMovies) {
        if(!set.has(movie.id)) {
            filterArr.push(movie)
        }
    }
    return state.resultMovies.concat(filterArr)
}

export default { initState, movieReducer }