import React, { useState } from "react"
import { slide as Menu } from "react-burger-menu";
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"


export default props => {
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
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/Home">
        Mina resor
      </a>

      <a className="menu-item" href="/update-profile">
        Update profile
      </a>

      <a className="menu-item" href="/exporteraresa">
        Exportera resor
      </a>
      <Button  onClick={handleLogout} >
                          Log Out
       </Button>
    </Menu>
  );
};
