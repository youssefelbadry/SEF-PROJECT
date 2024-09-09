import React from "react";

import { useNavigate } from "react-router-dom";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";

const UsersStudents = () => {
  const navigate = useNavigate();

  function movetoCreatejop(e) {
    e.preventDefault();
    navigate("/AddUser"); // Navigate to the JobForm page
  }
  const users = [
    {
      name: "Here's the username",
      status: "Active",
      userID: "FE-2303",
      role: "Student",
      email: "user@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Active",
      userID: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Inactive",
      userID: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Inactive",
      userID: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
    {
      name: "Here's the username",
      status: "Inactive",
      userID: "BE-2302",
      role: "Student",
      email: "usertwo@gmail.com",
    },
  ];

  return (
    <div>
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

        <div className="col-lg-3 col-md-12">
          <div className="left-content  d-flex  flex-row d-md-block">
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
        </div>

        <div className="col-lg-9 col-md-12">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-md-5 text-md-start text-center">
              <div className="header-title">
                Users - Students
                <div className="linee mx-auto mx-md-0"></div>
              </div>
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

          <div className="table-responsive">
            <table className="table table-dark articles-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th className="px-md-1">User ID</th>
                  <th>Role</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <React.Fragment key={index}>
                    {/* Table for Mobile */}
                    <tr className="d-block d-md-none px-0 w-100 col-12 mx-auto">
                      <td className="d-flex mx-auto w-100 mt-3" colSpan="5">
                        <div className="box mb-3 row w-100 mx-auto mt-2">
                          <div className="col-12 w-100 p-0 mx-auto">
                            <div className="d-flex justify-content-between align-items-center ">
                              <h6 className="fw-bold fs-6">Name:</h6>
                              <span
                                className={`${
                                  user.status === "Active"
                                    ? "bg-primary"
                                    : "bg-grey"
                                } ButtonsTable fs-6 fw-medium text-center py-1`}
                                style={{ width: "35%" }}
                              >
                                {user.status}
                              </span>
                            </div>
                            <p className="mt-2 mb-0 fs-5 fw-lighter">
                              {user.name}
                            </p>
                          </div>

                          <div className="col-5 mt-3 p-0">
                            <h6 className="fw-bold fs-6">User ID:</h6>
                            <p className="fw-lighter fs-6">{user.userID}</p>
                          </div>

                          <div className="col-7 mt-3 p-0 d-flex flex-column justify-content-end align-items-end">
                            <h6 className="fw-bold text-start fs-6">Role:</h6>
                            <p className="text-start fs-6 fw-lighter ">
                              {user.role}
                            </p>
                          </div>

                          <div className="col-12 mt-3 p-0">
                            <h6 className="fw-bold text-start fs-6">Email:</h6>
                            <p className="text-start fs-6 fw-lighter">
                              {user.email}
                            </p>
                          </div>

                          <div className="text-end">
                            <button className="btn-act me-3">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn-act">
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* table for Desktop */}
                    <tr className="d-none d-md-table-row">
                      <td data-label="Name">{user.name}</td>
                      <td data-label="Status">
                        <span
                          className={`${
                            user.status === "Active" ? "bg-primary" : "bg-grey"
                          } ButtonsTable  `}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td data-label="User ID">{user.userID}</td>
                      <td data-label="Role">{user.role}</td>
                      <td data-label="Email">{user.email}</td>
                      <td className="text-end">
                        <div className="action-buttons">
                          <button className="me-1 btn-act">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn-act">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
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

          <div className="d-block d-lg-none text-center mt-5  d-md-flex justify-content-md-end ">
            <button className="btn btn-gold w-100">Create New Article</button>
          </div>

          <div className="upload-button  d-block d-md-none text-center mt-2  d-md-flex justify-content-md-end mt-md-2">
            <button className=" btn-gold btngoldCertificates w-100">
              Upload Certificates
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default UsersStudents;
