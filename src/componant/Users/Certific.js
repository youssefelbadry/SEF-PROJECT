import React from "react";
import Sidenar from "../sidebar";
import Catogerycourses from "./Catogerycourses";
import FileUpload from "../Articledetails/fileUpload";
import HeaderPages from "../HeaderPages";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import BarAdmin from "../BarAdmin";

function Certific() {
  const navigate = useNavigate();

  function movetoCreatejop(e) {
    e.preventDefault();
    navigate("/UserStudents"); // Navigate to the JobForm page
  }
  return (
    <div>
      <BarAdmin/>
    <div>
      <HeaderPages />
      <div className="container">
        <div className="row">
          <div className="top-bar mt-2 mb-0 mb-md-1 d-flex justify-content-between align-items-center mb-3">
            <div className="top-info text-white mb-0 mb-md-5">
              <div className="admin-panel-title">
                Admin Panel
                <div className="lineP "></div>
              </div>
              <p className="panel-date mb-0 mb-md-2">6th June 2023</p>
            </div>
          </div>
          <div className="col-md-3 mt-3    col-sm-12">
            {" "}
            {/* Use col-sm-12 for full width on small screens */}
            <Sidenar />
          </div>
          <div
            className="col-md-9 col-sm-12 text-white"
            style={{ zIndex: "5" }}
          >
            {" "}
            {/* Use col-sm-12 for full width on small screens */}
            <div className="px-2 px-md-3 mb-4">
              <div className="col-12 col-md-6 text-md-start">
                <div className="header-title d-block">
                  Certific Details
                  <div className="linee d-none d-md-block mx-md-0"></div>
                </div>
              </div>
            </div>
            <div className="row  text-white">
              {" "}
              {/* Use px-2 instead of px-0 */}
              <div className="col-md-4 col-sm-12">
                <div className="input1 text-white">
                  <label className="text-white form-label cap capli fs-6">
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="form-control border border-0 bg-gray"
                    id="textInput"
                    name="textInput"
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 text-white">
                <div className="input1">
                  <label className="text-white form-label cap capli fs-6">
                    Data Acquired
                  </label>
                  <input
                    type="text"
                    className="form-control border border-0 bg-gray"
                    id="textInput"
                    name="textInput"
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 text-white">
                <div className="input1">
                  <label className="text-white form-label cap capli fs-6">
                    Update Date
                  </label>
                  <input
                    type="text"
                    className="form-control border border-0 bg-gray"
                    id="textInput"
                    name="textInput"
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row  text-white">
              <div className="col-md-12">
                <Catogerycourses />
              </div>
            </div>
            <div className="row mt-4 col-md-12 col-12 text-white">
              <div className="col-md-12 col-sm-11">
                <p className="text-white p-1 px-md-3 form-label cap capli fs-6">
                  Upload File
                </p>
                <FileUpload />
              </div>
            </div>
            <div className="mb-3 d-block d-md-flex justify-content-end my-3">
              <button
                type="submit"
                style={{ fontWeight: "500" }}
                className="btn mt-2 col-md-2 col-12 btn1 ms-1 text-white py-2 px-2 bg-grey"
              >
                CANCEL
              </button>
              <button
                type="submit"
                style={{ fontWeight: "500" }}
                className="btn mt-2 col-md-2 col-12 btn1 ms-1 text-white py-2 px-2"
                onClick={movetoCreatejop}
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default Certific;
