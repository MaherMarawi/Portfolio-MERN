import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'rebass'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home'
import Admin from './Components/Admin'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
