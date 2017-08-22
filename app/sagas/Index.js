import { fork } from 'redux-saga/effects'

import {
    watchRequestHotMovieList,
    watchRequestCommingMovieList,
    watchRequestUSAMovieList,
    watchRequestTOPMovieList
} from './Movies'

export default function* rootSaga() {
    yield [
        fork(watchRequestHotMovieList),
        fork(watchRequestCommingMovieList),
        fork(watchRequestUSAMovieList),
        fork(watchRequestTOPMovieList)
    ]
}