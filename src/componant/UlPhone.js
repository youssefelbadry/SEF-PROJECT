import React,{useState ,useEffect} from 'react'
import { useNavigate , useLocation} from 'react-router-dom';

function UlPhone() {
    const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate(); 
  const location = useLocation(); 


  useEffect(() => {
    if (location.pathname === "/Users") {
      setActiveItem("users");
    } else if (location.pathname === "/Articles") {
      setActiveItem("articles");
    } else if (location.pathname === "/jobs") {
      setActiveItem("jobs");
    } else if (location.pathname === "/Courses") {
      setActiveItem("courses");
    }
  }, [location.pathname]); 
  return (
    <div>
      <div className="show-phone-ul">
        <div className="row">
          <ul className="col">
           
            <li
              className="col-3"
              onClick={() => navigate("/Users")}
              style={{
                cursor: "pointer",
                color: activeItem === "users" ? "#bf9530" : "white",
              }}
            >
              <h3>Users</h3>
            </li>

            <li
              className="col-3"
              onClick={() => navigate("/Articles")}
              style={{
                cursor: "pointer",
                color: activeItem === "articles" ? "#bf9530" : "white",
              }}
            >
              <h3>Articles</h3>
            </li>

        
            <li
              className="col-3"
              onClick={() => navigate("/jobs")}
              style={{
                cursor: "pointer",
                color: activeItem === "jobs" ? "#bf9530" : "white",
              }}
            >
              <h3>Jobs</h3>
            </li>

            
            <li
              className="col-3"
              onClick={() => navigate("/Courses")}
              style={{
                cursor: "pointer",
                color: activeItem === "courses" ? "#bf9530" : "white",
              }}
            >
              <h3>Courses</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UlPhone