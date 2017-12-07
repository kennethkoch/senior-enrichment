'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Main'
import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main')
)
