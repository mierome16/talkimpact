import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from '../store' 

import AuthRoute from './AuthRoute';
import ChatRoom from './ChatRoom';
import Login from './Login'

export default props => {

  return (
    <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login}></Route>
            <AuthRoute path="/:roomname" component={ChatRoom}></AuthRoute>
          </div>

        </Router>
    </Provider>
  )
}