import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import App from './containers/app'
//import TabTopView from './containers/test'
import rootSaga from './sagas/Index'

const store = configureStore()
store.runSaga(rootSaga)

const Root = () =>(
  <Provider store={store}>
    <App/>
  </Provider>)

export default Root