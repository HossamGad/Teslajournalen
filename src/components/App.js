import React from "react"
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import LandingPage from './LandingPage'
import Home from './Home';



function App() {
  return (
    
    <Router>
      <Route path="/LandingPage" component={LandingPage} />
      <AuthProvider>
             <Switch>
                <PrivateRoute  exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/Home" component={Home} />
             </Switch>
         </AuthProvider>
    </Router> 
         
  )
}

export default App;
