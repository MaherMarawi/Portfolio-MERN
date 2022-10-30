import React from 'react'

import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'rebass'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import AdminPanel from './Components/AdminPanel'

const App = () => {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/adminPanel' component={AdminPanel} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}



export default App
