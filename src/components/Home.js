import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Layout, Header, Navigation, Content, Tab, Tabs} from 'react-mdl';
import SideBar from "./sidebar";
import Connect from "./SmartCar-API/Connect";


export default function Dashboard() { 
   
    return (   
        
        <>
            <div  >
          
          <Layout>
              <Header style={{backgroundColor:'black'}} title={<Link style={{textDecoration: 'none', color: 'white',fontSize:'25px',fontFamily:'open sans'}} >Tesla journalen</Link>} scroll>
                  <Navigation style={{backgroundColor:'black'}} >
                  <text className="demo-tabs"style={{marginRight:'566px',color: 'White',fontSize:'22px',fontFamily:'open sans'}}>Mina resor</text>
                  </Navigation>
                  <div>
                  </div>
                </Header >
            <div className="demo-tabs">
                <Tabs >
                    <Tab>Privatresor</Tab>
                    <Tab>Nya resor</Tab>
                    <Tab>Arbetsresor</Tab>
                </Tabs> 
            </div>   
            <div>
            <SideBar />
            <Connect/>
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
                     </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Från:...</li>
                        <li class="list-group-item">Till:...</li>
                        <li class="list-group-item">min</li>
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


