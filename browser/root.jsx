import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import Login from './components/Login'
import Home from './components/Home'
import Setup from './components/Setup'
import MakeIt from './components/MakeIt'
import AppContainer from './containers/AppContainer'

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/setup' component={Setup} />
          <Route path='/makeit' component={MakeIt} />
        </Route>
      </Router>
    </Provider>
  )
}
