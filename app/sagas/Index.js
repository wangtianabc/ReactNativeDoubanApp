import { fork } from 'redux-saga/effects'

import {
    watchRequestHotMovieList,
    watchRequestCommingMovieList,
    watchRequestUSAMovieList,
    watchRequestTOPMovieList,
    watchRequestMovieSearch
} from './Movies'
import { watchRequestMusicList } from './Musics'
import { watchRequestBookList } from './Books'

export default function* rootSaga() {
    yield [
        fork(watchRequestHotMovieList),
        fork(watchRequestCommingMovieList),
        fork(watchRequestUSAMovieList),
        fork(watchRequestTOPMovieList),
        fork(watchRequestMusicList),
        fork(watchRequestBookList),
        fork(watchRequestMovieSearch)
    ]
}