import * as types from '../constans/ActionTypes'

const initState = {
    loading: false,
    musics: []
}

const musicReducer = (state=initState, action) => {
    switch (action.type) {
        case types.REQUEST_MUSIC_LIST:
            return {
                ...state,
                loading: action.loading
            }
        case types.RECEIVE_MUSIC_LIST:
            return {
                ...state,
                loading: action.loading,
                movies: action.hotMovieList
            }
        default:
            return state
    }
}

export default { initState, musicReducer }