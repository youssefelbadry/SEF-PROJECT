import React from "react";

import { useNavigate } from "react-router-dom";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
import BarAdmin from "../BarAdmin";

const UsersStudents = () => {
  const navigate = useNavigate();

  function movetoCreatejop(e) {
    e.preventDefault();
    navigate("/Certific"); // Navigate to the JobForm page
  }
  const users = [
    {
      name: "Here's the username",
      status: "Active",
      userid: "FE-2303",
      role: "Student",
      email: "user@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Active",
      userid: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Inactive",
      userid: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Inactive",
      userid: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Inactive",
      userid: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
  ];
  const UsItem = users.map((item, index) => {
    let buttonStyle = {};
    let buttonText = "";
  
    if (index < 2) {
      buttonStyle = {
        backgroundColor: "#BF9B30",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "Active";
    } else if (index < 6) {
      buttonStyle = {
        backgroundColor: "gray",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "Inactive";
    }
  
    return (
      <table className="table mob-table" key={index}>
        <tbody>
          <tr>
            <td className="col-lg-2 rr zz">
              <strong>Name:</strong>
              {item.name}
            </td>
            <td className="col-lg-2 but-lg">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2 zz">
              <strong>User Id:</strong>
              {item.userid}
            </td>
  
            <td className="col-lg-2 time zz">
              <strong>Role:</strong>
              {item.role}
            </td>
            <td className="col-lg-2 time zz">
              <strong>Email:</strong>
              {item.email}
            </td>
            <td className="col-lg-2 but-mob">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2 rrr">
              <div className="icons rrr">
                <i class="far fa-trash-alt col-lg-6"></i>
                <i class="far fa-edit col-lg-6"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
  
  return (
    <div>
      <BarAdmin/>
    <div className="text-light">
        <HeaderPages/>
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
          <div className="top-info text-white mb-0 mb-md-5">
            <div className="admin-panel-title">
              Admin Panel
              <div className="lineP"></div>
            </div>
            <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
          </div>
          <div className="d-none d-lg-block">
            <button className="btn btn-gold" onClick={movetoCreatejop}>
              Create New User
            </button>
          </div>
        </div>
  
        <div className="sec2 container">
            <div class="left-nav col-sm-12 col-lg-3 det-left">
            <ul className="sidebar-list justify-content-center mx-auto my-0 pt-2 py-md-3 px-3 d-flex flex-row flex-md-column">
                <li className="title titleActive">Users</li>
                <ul className="sub-list">
                  <li>Admins</li>
                  <li>Editors</li>
                  <li>Instructors</li>
                  <li style={{ color: "#BF9530" }}>Students</li>
                </ul>
                <li className="title ">Articles</li>
                <ul className="sub-list">
                  <li>Published Articles</li>
                  <li>Scheduled Articles</li>
                  <li>Saved Drafts</li>
                </ul>
                <li className="title">Jobs</li>
                <ul className="sub-list">
                  <li>Published Jobs</li>
                  <li>Saved Drafts</li>
                </ul>
                <li className="title">Courses</li>
                <ul className="sub-list">
                  <li>Published Courses</li>
                  <li>Scheduled Courses</li>
                  <li>Saved Drafts</li>
                </ul>
                <div className=" mt-md-5 mb-md-3 d-none d-md-block  d-lg-flex">
                  <button className=" btn-gold mx-lg-auto">
                    Upload Certificates
                  </button>
                </div>
              </ul>
            </div>
            <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="row">
                      <div className="show-phone-ul">
                        <div className="row">
                          <ul className="col">
                            <li className="col-3">
                              <h3>Users</h3>
                            </li>
                            <li className="col-3">
                              <h3>Articles</h3>
                            </li>
                            <li className="col-3">
                              <h3>Jobs</h3>
                            </li>
                            <li className="col-3">
                              <h3>Courses</h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="choeses">
                        <select
                          style={{
                            backgroundColor: "rgba(131, 128, 128,0.8)",
                            color: "white",
                          }}
                          class="form-select btn se"
                          aria-label="Default select example"
                        >
                          <option selected>Students</option>
                          <option value="1">Users</option>
                          <option value="2">Articles</option>
                          <option value="3">Jobs</option>
                          <option value="3">Courses</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="hheader container">
                    <div className="line-hight">
                      <h2 style={{ margin: "20px 0px", color:'white'}}>User-Students</h2>
                      <div className="linee d-none d-md-block mx-md-0"></div>
                    </div>
                    <div className="col-md-5 mt-3 mt-md-0">
              <div className="search-container d-none d-md-flex">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search In Users"
                />
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="d-block d-md-none">
                <div className="mobile-dropdown">
                  <button className="dropdown-btn">
                    Students
                    <i className="fas fa-chevron-down dropdown-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
                  </div>
                  <table className="table table-mob">
                    <thead>
                      <tr>
                        <td className="col-lg-2">Name</td>
                        <td className="col-lg-2">Status</td>
                        <td className="col-lg-2">User Id</td>
                        <td className="col-lg-2">Role</td>
                        <td className="col-lg-2">EmailL</td>
                        <td className="col-lg-2">Delete & Edit</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
  
              <div className="col push">
                {UsItem}
                <div
                  className="btn-admin-mob" >
                  <div>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#bf9b30", margin: "auto" }}
                    >
                      CREATE NEW USER
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn"
                      style={{
                        borderColor: "#bf9b30",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Uploud Certificates
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="pagination mt-4">
            <a href="#" className="arrow">
              <i
                className="fas fa-chevron-left"
                style={{ color: "#BF9530" }}
              ></i>
            </a>

            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <span>.....</span>
            <a href="#" className="arrow">
              <i
                className="fas fa-chevron-right"
                style={{ color: "#BF9530" }}
              ></i>
            </a>
          </div>
          </div>
          <Footer/>
    </div>
    </div>
    
  );
};

export default UsersStudents;
