import React , {Component}from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import * as ROUTES from './components/constants/routes'
import {withAuthentication} from './components/Session'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authUser:null
    }
  }

  render() {
    return (
        <Router>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
          <Route path={ROUTES.SIGNUP} component={SignUp}/>
          <Route path={ROUTES.SIGNIN} component={SignIn}/>
          <Route path={ROUTES.HOME} component={Home}/>
        </Router>
    )
  }
}

export default withAuthentication(App)