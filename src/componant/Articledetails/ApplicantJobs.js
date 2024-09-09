import React from "react";

//remove  npm install styled-components
import Sidenar from "../sidebar";
import Footer from "../Footer";

const ApplicantJobs = () => {
  const applications = [
    {
      applicant: "the Applicant name",
      experience: "2 Years",
      email: "usertwo@gmail.com",
      mobile: "002011289304",
    },
    {
      applicant: "the company name",
      experience: "3 Years",
      email: "usertwo@gmail.com",
      mobile: "002011289304",
    },
    {
      applicant: "the company name",
      experience: "1 Year",
      email: "usertwo@gmail.com",
      mobile: "002011289304",
    },
    {
      applicant: "the company name",
      experience: "3 Years",
      email: "usertwo@gmail.com",
      mobile: "002011289304",
    },
    {
      applicant: "the company name",
      experience: "2 Years",
      email: "usertwo@gmail.com",
      mobile: "002011289304",
    },
    {
      applicant: "the company name",
      experience: "4 Years",
      email: "usertwo@gmail.com",
      mobile: "002011289304",
    },
  ];

  return (
    <div className="container mt-3 mb-5 ">
      <div className="row">
        <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
          <div className="top-info text-white mb-0 mb-md-5 ">
            <div className="admin-panel-title">
              Admin Panel
              <div className="lineP "></div>
            </div>
            <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
          </div>
        </div>
        {/* Left sidebar Div */}
        <div className="col-lg-3 col-md-12">
          <Sidenar />
        </div>

        {/* Right Div */}
        {/* content of right div */}

        <div
          className="col-lg-9 col-md-12 table-responsive"
          style={{ zIndex: "5", position: "relative" }}
        >
          {/* content of right div */}
          <div className="row align-items-center justify-content-between mb-3 ">
            <div className="col-md-7 text-md-start text-center ">
              <div className="header-title d-block fs-5 ">
                Applications For "Job" at "company name"
                <div className="linee mx-auto mx-md-0 w-25 d-none d-md-block"></div>
              </div>
            </div>
          </div>

          <div className="d-none d-md-block text-white text-start  ">
            <div className="row text-start">
              <div className="col-3">Applicant</div>
              <div className="col-2 ">Experience</div>
              <div className="col-3 ">Email</div>
              <div className="col-2 px-0">Mobile Number</div>
              <div className="col-2"></div>
            </div>
          </div>
          {applications.map((application, index) => (
            <div
              className="d-flex flex-column flex-md-row text-white mb-4 p-3"
              style={{
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.4)",
                borderRadius: "5px",
                marginBottom: "25px",
              }}
              key={index}
            >
              <div className="col-12 col-md-3">
                <p className="d-block d-md-none">Applicant</p>
                {application.applicant}
              </div>

              <div className="col-12 col-md-2 ">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <p className="d-block d-md-none">Experience</p>
                    {application.experience}
                  </div>
                  <div className="col-6 col-md-12  d-block d-md-none">
                    <p className="d-block d-md-none">Email</p>
                    {application.email}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-3 d-none d-md-block">
                <p className="d-block d-md-none">Email</p>
                {application.email}
              </div>

              <div className="col-12 col-md-2">
                <p className="d-block d-md-none">Mobile Number</p>
                {application.mobile}
              </div>

              <div className="col-12 col-md-2 text-end mt-2 mt-md-0">
                <button
                  className="ButtonsTable w-100 text-white"
                  style={{ backgroundColor: "#BF9530" }}
                >
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <a href="#" className="arrow">
            <i className="fas fa-chevron-left" style={{ color: "#BF9530" }}></i>
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
      <Footer />
    </div>
  );
};

export default ApplicantJobs;
