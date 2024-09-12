import { useNavigate } from "react-router-dom";
import React from 'react'
function BarAdmin() {
  
    const navigate = useNavigate();

    const handleLogout = () => {
        
        setTimeout(() => {
            navigate('/login');
        }, 1100); 
    };


    const handleprofile = () => {
        
      
          navigate('/Profile');
    
  };
  const handleAdmin = () => {
        
    
        navigate('/Articles');
    
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
              
              
            </ul> <ul className="navbar-nav aaa admin">
            <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handleAdmin}>
                  ADMIN PANAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handleprofile}>
                  PROFILE
                </a>
              </li>
            </ul> <ul className="navbar-nav aaa admin">
              
             
              <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handleLogout}>
                  LOGOUT
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

export default BarAdmin