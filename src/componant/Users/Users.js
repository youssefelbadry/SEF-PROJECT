import React from "react";
import Sidenar from "../sidebar";
import { useNavigate } from "react-router-dom";
import logo from "../../image/seff_logo_transparent.png";
import HeaderPages from "../HeaderPages";
import Sidebar from "../sidebar";
import Footer from "../Footer";
import BarAdmin from "../BarAdmin";
import UlPhone from "../UlPhone";
import ChoosePhone from "../ChoosePhone";

const Users = () => {
  const navigate = useNavigate();
  function movetoCreatejop(e) {
    e.preventDefault();
    navigate("/AddUser"); // Navigate to the JobForm page
  }

  const UserData = [
    {
      id: 1,
      title: "Here’s the username",
      status: "",
      userid: "FE-2023",
      role: "Admin",
      email: "usertwo@gmail.com",
      icons: "",
    },
    {
      id: 2,
      title: "Here’s the username",
      status: "",
      userid: "BE-2302",
      role: "Editor",
      email: "usertwo@gmail.com",
      icons: "",
    },
    {
      id: 3,
      title: "Here’s the username",
      status: "",
      userid: "BE-2302",
      role: "Instructor",
      email: "usertwo@gmail.com",
      icons: "",
    },
    {
      id: 4,
      title: "Here’s the username",
      status: "",
      userid: "BE-2302",
      role: "student",
      email: "usertwo@gmail.com",
      icons: "",
    },
    {
      id: 5,
      title: "Here’s the username",
      status: "",
      userid: "BE-2302",
      role: "Instructor",
      email: "usertwo@gmail.com",
      icons: "",
    },
    {
      id: 6,
      title: "Here’s the username",
      status: "",
      userid: "BE-2302",
      role: "Admin",
      email: "usertwo@gmail.com",
      icons: "",
    },
  ];
  // DRAWITEM
  const UsItem = UserData.map((item, index) => {
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
              {item.title}
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
  //===============================================================================

  return (
    <div>
      <BarAdmin />
      <div className="container mt-3 mb-5 text-light">
        {/* SECTION 1 */}

        <HeaderPages />
        {/* ================================================================= */}
        {/* SECTION2 */}
        <div className="row">
        <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
          <div className="top-info text-white mb-0 mb-md-5 ">
            <div className="admin-panel-title">
              Admin Panel
              <div className="lineP "></div>
            </div>
            <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
          </div>
          <div className="d-none d-lg-block">
            <button className="btn btn-warning" style={{backgroundColor:'#bf9b30', color:'white'}} onClick={movetoCreatejop}>
            CREATE NEW USER

            </button>
          </div>
        </div>
        <div className="sec2 container">
          <div class="left-nav col-sm-12 col-lg-3 det-left">
            <Sidebar />
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="row">
                   <UlPhone/>
                   <ChoosePhone/>

                  </div>
                </div>
                <div className="hheader container">
                  <div className="line-hight">
                    <h2 style={{ margin: "20px 30px" }}>Users</h2>
                    <div className="line"></div>
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
              <div className="btn-admin-mob">
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
        </div>
        </div>
      </div>

        {/* =========================================================================== */}
        <Footer />
    </div>
  );
};

export default Users;
