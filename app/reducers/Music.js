import * as types from '../constans/ActionTypes'

const initState = {
    loading: false,
    musics: []
}

const musicReducer = (state=initState, action) => {
    switch (action.type) {
        case types.FETCH_MUSIC_LIST:
            return {
                ...state,
                loading: action.loading
            }
        case types.RECEIVE_MUSIC_LIST:
            return {
                ...state,
                loading: action.loading,
                musics: action.musicList
            }
        default:
            return state
    }
}

export default { initState, musicReducer }