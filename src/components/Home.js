import React, { useState } from "react"
import { Card, Button, Alert, Nav, NavDropdown} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Layout, Header, Navigation, Content, Tab, Tabs, Text} from 'react-mdl';
import { Dropdown } from "bootstrap";
import Drawer from 'react-motion-drawer';
//import "./App.css";
import SideBar from "./sidebar";


export default function Dashboard() {

   

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/LandingPage")
        } catch {
          setError("Failed to log out")
        }
      }
     
    return (   
        
        <>
            <div  >
          
          <Layout>
              <Header style={{backgroundColor:'black'}} title={<Link style={{textDecoration: 'none', color: 'white',fontSize:'25px',fontFamily:'open sans'}} >Tesla journalen</Link>} scroll>
                  <Navigation style={{backgroundColor:'black'}} >
                 {/*
                     <div>
                      {error && <Alert variant="danger">{error}</Alert>}
                      <strong style={{color:'white'}}></strong>
                     </div>
                  
                      <Link style={{fontSize:'18px', color:'white'}}to="/update-profile"> Update Profile </Link>                   
                     <div >
                      <Button  onClick={handleLogout} >
                          Log Out
                      </Button>
                 </div>*/}
                    <text className="demo-tabs"style={{marginRight:'566px',color: 'White',fontSize:'22px',fontFamily:'open sans'}}>Mina resor</text>
                  </Navigation>
                  <div>
                  
                  </div>
                  
                  
                </Header >
                                                        
                
             {/*<Header style={{backgroundColor:'grey',textDecoration: 'none', color: 'black',fontSize:'25px',fontFamily:'open sans'}} >
             <Navigation  >
                 <Link style={{marginLeft:'180px', fontSize:'23px'}}>Privatresor</Link>
                 <Link style={{marginLeft:'200px', fontSize:'23px'}}>Nya resor</Link>
                 <Link style={{marginLeft:'200px', fontSize:'23px'}}>Arbetsresor</Link>
                 
            </Navigation>
             </Header>*/}
           <div className="demo-tabs">
                <Tabs >
                    <Tab>Privatresor</Tab>
                    <Tab>Nya resor</Tab>
                    <Tab>Arbetsresor</Tab>
                    
                </Tabs>
               
            </div>   
            <div>
            <SideBar />
            </div>
                  
                               
          <Content>
            <div className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "90vh" }}>
            <div className="w-100" style={{ maxWidth: "300px" }} >
              <Card>
              <Card.Body>
                    <div class="card" style={{width: "18rem;"}}>
                    <img  class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <Button href="#" class="card-link">Privat </Button>
                        <Button style={{marginLeft:'10px'}} href="#" class="card-link">Arbete</Button>
                    </div>
                    </div>
                </Card.Body>
              </Card>
              </div>
              </div>           
          </Content>
         </Layout>
         
         
    </div>
        
        
        
      </>
      
      
    )
    
}


