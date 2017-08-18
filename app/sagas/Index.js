import { fork } from 'redux-saga/effects'

import { wathRequestHotMovieList } from './Movies'

export default function* rootSaga() {
    yield [fork(wathRequestHotMovieList)]
}