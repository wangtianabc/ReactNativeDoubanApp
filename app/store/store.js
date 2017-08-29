import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import Login from '../reducers/Login'
import Movies from '../reducers/Movies'
import Musics from '../reducers/Music'
import Books from '../reducers/Book'
import createSagaMiddleware, {END} from 'redux-saga'

const initState = {
    login: Login.initState,
    movie: Movies.initState,
    music: Musics.initState,
    book: Books.initState
}

const reducers = {
    login: Login.loginReducer,
    movie: Movies.movieReducer,
    music: Musics.musicReducer,
    book: Books.bookReducer
}
const sagaMiddleware = createSagaMiddleware()

const middleware = []

middleware.push(sagaMiddleware)

if (__DEV__) {
    middleware.push(createLogger)
}

const rootReducers = combineReducers(reducers)

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(rootReducers, initState);
    // install saga run
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
}