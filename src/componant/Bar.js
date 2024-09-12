import { useNavigate } from "react-router-dom";
import React from 'react'
function Bar() {
  
  const navigate = useNavigate();

  function handleLogIN (e)  {
      
        navigate('/login'); 
    };


   

  return (
    <div>
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-custom bar">
        <div className="container">
        
          <div
            className="collapse navbar-collapse "
            id="basic-navbar-nav"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <ul className="navbar-nav aaa admin">
              
              <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handleLogIN}>
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Bar