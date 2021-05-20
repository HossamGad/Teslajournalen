import React from "react"
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
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
//import './App.css';


function App() {
  return (
    
    <Router>
      <Route path="/LandingPage" component={LandingPage} />
      <AuthProvider>
             <Switch>
            {/* <Layout>
              <Header style={{backgroundColor:'black'}} title={<Link style={{textDecoration: 'none', color: 'white',fontSize:'45px',fontFamily:'open sans'}} to="/">Tesla</Link>} scroll>
                <Navigation style={{backgroundColor:'black'}} >
                  <Link style={{fontFamily:'open sans',color: 'white',fontSize:'20px'}}  >Om tesla</Link>  
                  <Link style={{fontFamily:'open sans',color: 'white',fontSize:'20px'}} to="/Login">Log in</Link>
                  <Link style={{fontFamily:'open sans',color: 'white',fontSize:'20px'}} to="/Signup">Sign up</Link>
                </Navigation>
            </Header>*/}
              
                <PrivateRoute  exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/Home" component={Home} />
                     
               
             </Switch>
         </AuthProvider>
    </Router>
    /*
     <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }} >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
         <AuthProvider>
             <Switch>
               <PrivateRoute  exact path="/" component={Dashboard} />
               <PrivateRoute path="/update-profile" component={UpdateProfile} />
               <Route path="/signup" component={Signup} />
               <Route path="/login" component={Login} />
               <Route path="/forgot-password" component={ForgotPassword} />
               <div style={{marginleft:'100px'}} >
               <Route path="/LandingPage" component={LandingPage} />
               </div>
               
             </Switch>
         </AuthProvider>
      </Router>
    </div>
    </Container>
   */
      
  
    
    
  )
}

export default App;
