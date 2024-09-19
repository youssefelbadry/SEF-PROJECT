import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function ChoosePhone() {
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
  
    const handleSelectChange = (event) => {
      const value = event.target.value;
      if (value === "1") {
        setActiveItem("users");
        navigate("/Users");
      } else if (value === "2") {
        setActiveItem("articles");
        navigate("/Articles");
      } else if (value === "3") {
        setActiveItem("jobs");
        navigate("/jobs");
      } else if (value === "4") {
        setActiveItem("courses");
        navigate("/Courses");
      }
    };
  
    return (
      <div>
        <div className="choeses">
          <select
            style={{
              backgroundColor: "rgba(131, 128, 128,0.8)",
              color: "white",
            }}
            className="form-select btn se"
            aria-label="Default select example"
            onChange={handleSelectChange} 
            value={activeItem === "users" ? "1" : activeItem === "articles" ? "2" : activeItem === "jobs" ? "3" : "4"}
          >
            <option value="1">Users</option>
            <option value="2">Articles</option>
            <option value="3">Jobs</option>
            <option value="4">Courses</option>
          </select>
        </div>
      </div>
    );
}

export default ChoosePhone