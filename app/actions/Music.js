import * as types from '../constans/ActionTypes'

export function requestMusicList(loading, subUrl = '') {
    return {
        type: types.REQUEST_MUSIC_LIST,
        loading,
        subUrl
    }
}

export function fetchMusicList(loading) {
    return {
        type: types.FETCH_MUSIC_LIST,
        loading
    }
}

export function receiveMusicList(loading, hotMovieList) {
    return {
        type: types.REQUEST_MUSIC_LIST,
        loading,
        hotMovieList
    }
}