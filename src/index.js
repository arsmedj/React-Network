import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './Redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App isAuth={store.getState().auth.isAuth} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
