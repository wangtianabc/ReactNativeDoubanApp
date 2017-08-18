import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import Login from '../reducers/Login'
import Movies from '../reducers/Movies'

const initState = {
    login: Login.initState,
    movie: Movies.initState
}

const reducers = {
    login: Login.loginReducer,
    movie: Movies.movieReducer
}

const middleware = []

if (process.env.Node_ENV !== 'production') {
    middleware.push(createLogger)
}

const rootReducers = combineReducers(reducers)

const store = createStore(rootReducers, initState, applyMiddleware(...middleware))

export default store