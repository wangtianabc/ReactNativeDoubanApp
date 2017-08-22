import { fork } from 'redux-saga/effects'

import { watchRequestHotMovieList, watchRequestCommingMovieList } from './Movies'

export default function* rootSaga() {
    yield [fork(watchRequestHotMovieList), fork(watchRequestCommingMovieList)]
}