import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './containers/app'

const Root = () =>(
  <Provider store={store}>
    <App/>
  </Provider>)

export default Root