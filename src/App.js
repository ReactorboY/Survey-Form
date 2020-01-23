import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import * as ROUTES from './components/constants/routes'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import './App.css'

const App = () => (
  <Router>
    <Route exact path={ROUTES.LANDING} component={Landing}/>
    <Route path={ROUTES.SIGNUP} component={SignUp}/>
  </Router>
)



export default App