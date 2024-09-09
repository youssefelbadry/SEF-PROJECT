import React, { useState } from "react";
import Header from "../HeaderPages";
import { useNavigate } from "react-router-dom";
function Profile() {
    const navigate = useNavigate();

  function movetoEditprofile(e) {
    e.preventDefault();
    navigate("/EditProfile"); // Navigate to the JobForm page
  }
  return (
    
    <div>
      <div className="all-project">
        <div className="opicity">
          <Header />
          {/* ================================================================= */}
          {/* SECTION2 */}
          <div className="admin-banel container">
            <div>
              <span>Profile</span>
              <div className="line"></div>
              <span>6th June 2023</span>
            </div>
          </div>
          <div className="hheader container">
            <div className="profile-header">
              <div className="profile-content">
                <div className="profile-image">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                  />
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">Balqees Hamdi Sabir</h3>
                  <p className="profile-details">
                    Computer science, international islamic university
                  </p>
                </div>
                <div className="profile-edit">
                  <button className="btn btn-warning" onClick={movetoEditprofile}>EDIT PROFILE</button>
                </div>
              </div>
            </div>
          </div>
          {/* =========================================================================== */}
          <div className="container contact-body">
            <div className="row">
              <div className="col-lg-4 left-info">
                <div className="info-card">
                  <div className="info-section">
                    <h3 className="info-title">Personal info</h3>
                    <ul className="info-list">
                      <li>
                        <span>Student ID</span> 1420572
                      </li>
                      <li>
                        <span>Age</span> 26 y/o
                      </li>
                      <li>
                        <span>Nationality</span> Sudanese
                      </li>
                      <li>
                        <span>Country</span> Egypt
                      </li>
                      <li>
                        <span>City</span> Cairo
                      </li>
                    </ul>
                  </div>

                  <div className="info-section">
                    <h3 className="info-title">Education</h3>
                    <ul className="info-list-bottom">
                      <li>
                        <span>University</span>
                        International Islamic University
                      </li>
                      <li>
                        <span>Major</span> Computer science
                      </li>
                      <li>
                        <span>Graduation Year</span> 2019
                      </li>
                    </ul>
                  </div>

                  <div className="info-section">
                    <h3 className="info-title">Contact Info</h3>
                    <ul className="info-list-bottom">
                      <li>
                        <i className="fas fa-envelope icon"></i>
                        <span>Email</span> balqeessaber@gmail.com
                      </li>
                      <li>
                        <i className="fas fa-phone icon"></i>
                        <span>Mobile Number</span> 00201064569047
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 right-cont-body">
                <div className="app-container">
                  <div className="about-section">
                    <h2>About</h2>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores.
                    </p>
                  </div>

                  <div className="course-section">
                    <h3>In Progress</h3>
                    <div className="course-card in-progress">
                      <div className="course-info">
                        <h4>Introduction to Data Analysis</h4>
                        <p><span style={{color:"#bf9b30"}}>Instructor : </span> Mohammed Nour</p>
                      </div>
                      <div className="course-level">
                        <span>LEV. 1</span>
                      </div>
                    </div>

                    <div className="course-card in-progress">
                      <div className="course-info">
                        <h4>Introduction to React JS</h4>
                        <p><span style={{color:"#bf9b30"}}>Instructor : </span> Tariq Ali</p>
                      </div>
                      <div className="course-level">
                        <span>LEV. 1</span>
                      </div>
                    </div>

                    <h3>Previous</h3>
                    <div className="course-card previous">
                      <div className="course-info">
                        <h4>System analysis and design</h4>
                        <p><span style={{color:"#bf9b30"}}>Instructor : </span> Sarah Ahmed</p>
                      </div>
                      <div className="course-level">
                        <span>LEV. 1</span>
                      </div>
                    </div>

                    <div className="course-card previous">
                      <div className="course-info">
                        <h4>Introduction to Web Development</h4>
                        <p><span style={{color:"#bf9b30"}}>Instructor : </span> Alaa Sameer</p>
                      </div>
                      <div className="course-level">
                        <span>LEV. 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Profile;
