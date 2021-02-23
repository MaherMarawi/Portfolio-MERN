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
      <BrowserRouter>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/adminPanel' component={AdminPanel} />
            </Switch>
          </Router>
        </div>
      </BrowserRouter>
    )
  }



export default App
