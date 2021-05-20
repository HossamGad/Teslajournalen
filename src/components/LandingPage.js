import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Roadster from '../image/Roadster.jpg'

import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import App from './App'




import "bootstrap/dist/css/bootstrap.min.css"

class LandingPage extends Component {
  constructor() {
    super();  
    this.state = {serverData: ""}
  }
  
  render() {
    return (
        
            

            
      <div  >
          
        <Layout>
            <Header style={{backgroundColor:'black'}} title={<Link style={{textDecoration: 'none', color: 'white',fontSize:'25px',fontFamily:'open sans'}} to="/">Tesla journalen</Link>} scroll>
                <Navigation style={{backgroundColor:'black'}} >
                  <Link style={{fontFamily:'open sans',color: 'white',fontSize:'20px'}}  >Om tesla</Link>  
                  <Link style={{fontFamily:'open sans',color: 'white',fontSize:'20px'}} to="/Login">Log in</Link>
                  <Link style={{fontFamily:'open sans',color: 'white',fontSize:'20px'}} to="/Signup">Sign up</Link>
                </Navigation>
            </Header>
      
        <Content>
            
            <div className="page-content" />
            <img style={{width: '90%', marginLeft:'5%', bottom:'20%'}} src={Roadster} ></img>
        </Content>
       </Layout>
       
  </div>

   
    );
  }
}

export default LandingPage;