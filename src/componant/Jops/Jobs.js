import React from "react";
import { useNavigate } from "react-router-dom";
import JospsData from "../../Data/jobs";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
import Sidebar from "../sidebar";
import BarAdmin from "../BarAdmin";
import UlPhone from "../UlPhone";
import ChoosePhone from "../ChoosePhone";
const Jobs = () => {
  const navigate = useNavigate();

  function movetoCreatejop(e) {
    e.preventDefault();
    navigate("/jobForm"); // Navigate to the JobForm page
  }
  const CCjobs = [
    {
        id : 1,
        company: "Here’s the company name",
        position: "Here’s the position",
        status: "",
        posted:"Monday, June 5th 12:30 pm",
        Applications:"20",
        icons : ""
    },
    {
        id: 2,
        company: "Here’s the company name",
        position: "Here’s the position",
        status: "",
        posted:"Monday, June 5th 12:30 pm",
        Applications:"25",
        icons : ""
    },    {
        id : 3,
        company: "Here’s the company name",
        position: "Here’s the position",
        status: "",
        posted:"Monday, June 5th 12:30 pm",
        Applications:"48",
        icons : ""
    },    {
        id : 4,
        company: "Here’s the company name",
        position: "Here’s the position",
        status: "",
        posted:"Monday, June 5th 12:30 pm",
        Applications:"0",
        icons : ""
    },    {
        id : 5,
        company: "Here’s the company name",
        position: "Here’s the position",
        status: "",
        posted:"Monday, June 5th 12:30 pm",
        Applications:"11",
        icons : ""
    },    {
        id : 6,
        company: "Here’s the company name",
        position: "Here’s the position",
        status: "",
        posted:"Monday, June 5th 12:30 pm",
        Applications:"19",
        icons : ""
    }
]

  const CJItem = CCjobs.map((item, index) => {
    let buttonStyle = {};
    let buttonText = "";

    if (index < 2) {
      buttonStyle = {
        backgroundColor: "#BF9B30",
        color: "white",
        borderRadius: "20px",
        border: "none",
        padding: "5px 15px",
      };
      buttonText = "Open";
    } else if (index < 6) {
      buttonStyle = {
        backgroundColor: "gray",
        color: "white",
        borderRadius: "20px",
        border: "none",
        padding: "5px 15px",
      };
      buttonText = "Closed";
    }

    return (
      <table className="table mob-table" key={index}>
        <tbody>
          <tr>
            <td className="col-lg-2 rr zz">
              <strong>Company:</strong>
              {item.company}
            </td>

            <td className="col-lg-2 zz">
              <strong>Position:</strong>
              {item.position}
            </td>
            <td className="col-lg-2 but-lg">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2 time zz">
              <strong>Posted At:</strong>
              {item.posted}
            </td>
            <td className="col-lg-2 time zz">
              <strong>Applications:</strong>
              {item.Applications}
            </td>
            <td className="col-lg-2 but-mob">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2 rrr zz">
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
    <div className="container mt-3 mb-5 text-light">
      <HeaderPages />
      <div className="row">
        {/* Top Div */}
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
              CREATE NEW JOB
            </button>
          </div>
        </div>
        {/* Left Div */}
        <div className="sec2 container">
            <div class="left-nav col-sm-12 col-lg-3 det-left">
            <Sidebar/>
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
                    <div className="line-hight ">
                      <h2 style={{ margin: "20px 30px" }}>Jobs</h2>
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
                        <td className="col-lg-2">Company</td>
                        <td className="col-lg-2">Position</td>
                        <td className="col-lg-2">Status</td>
                        <td className="col-lg-2">Posted At</td>
                        <td className="col-lg-2">Applications</td>
                        <td className="col-lg-2">Delete & Edit</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>

              <div className=" push">
                {CJItem}
                <div className="btn-admin-mob">
                  <button
                    className="btn"
                    style={{ backgroundColor: "#bf9b30" }}
                  >
                    CREATE NEW JOB
                  </button>
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
    <Footer />

    </div>
  );
};

export default Jobs;
