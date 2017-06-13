import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AppContainer from './containers/AppContainer'

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={AppContainer}>
          {/* <Route path='/home' component={Home} /> */}
        </Route>
      </Router>
    </Provider>
  )
}
