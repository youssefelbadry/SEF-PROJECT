import { useNavigate } from "react-router-dom";
import React from 'react'
function BarStudent() {
  
    const navigate = useNavigate();

    const handleLogout = () => {
        
        setTimeout(() => {
            navigate('/login');
        }, 1100); 
    };


    const handleprofile = () => {
        
      
          navigate('/Profile');
    
  };
  const handleexam = () => {
        
    
        navigate('/exam');
    
};
const handlestudent = () => {
        
    
  navigate('/contactus');

};

  return (
    <div>
    <div >
      <nav className="navbar navbar-expand-lg navbar-custom bar">
        <div className="container">
        
          <div
            className="collapse navbar-collapse bbaarradmin"
            id="basic-navbar-nav"
            style={{ display: "flex", justifyContent: "end" }}
          >
          
            <ul className="navbar-nav aaa admin">
            <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handlestudent}>
                 STUDENT PORTAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handleexam}>
                  EXAMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  style={{cursor:'pointer'}} onClick={handleprofile}>
                  PROFILE
                </a>
              </li>
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

export default BarStudent