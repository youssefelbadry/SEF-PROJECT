import React from "react";
import Sidenar from "../sidebar";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";

function AddUser() {
  return (
    <div>
      <HeaderPages/>
    <div className="container">
      <div className="row">
        <div className="top-bar mt-2 mb-0 mb-md-1 d-flex justify-content-between align-items-center mb-3">
          <div className="top-info text-white mb-0 mb-md-5">
            <div className="admin-panel-title">
              Create New Course
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
        <div className="col-md-9 col-sm-12 text-white" style={{ zIndex: "5" }}>
          {" "}
          {/* Use col-sm-12 for full width on small screens */}
          <div className=" row px-2 px-md-3 mb-4">
            <div className="col-12 col-md-6 text-md-start">
              <div className="header-title d-block">
                Add User Details
                <div className="linee d-none d-md-block mx-md-0"></div>
              </div>
            </div>
            <div className=" col-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0">
              <button className="btn btn-gold px-5 d-none d-md-block">
                Publish
              </button>
            </div>
          </div>
          <div className="row mt-4 text-white">
            {" "}
            {/* Use px-2 instead of px-0 */}
            <div class="col-lg-4 col-md-12">
              <label for="input" class="form-label">
                First Name
              </label>
              <input
                class="form-control fs-6 text-whit"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="firstName"
              />
            </div>
            <div class="col-lg-4 col-md-12 ">
              <label class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control text-white"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="lastName"
              />
            </div>
            <div class="col-lg-4 col-md-12">
              <label for="input" class="form-label">
                Status
              </label>
              <input
                type="text"
                class="form-select border-0 text-white"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="status"
              />
            </div>
          </div>
          <div className="row mt-4 text-white">
            <div class="col-lg-9">
              <label for="" class="form-label">
                email address
              </label>
              <input
                type="text"
                class="form-control text-whit"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="emailAdress"
              />
            </div>

            <div class="col-lg-3 ">
              <label for="date" class="form-label">
                role
              </label>
              <input
                type="text"
                placeholder="student"
                class="form-select border-0 fs-6 "
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="role"
              />
            </div>
          </div>
          <div className="row mt-4 col-md-12 col-12 text-white">
            <div class="col-lg-6 col-md-12">
              <label class="form-label">Mobil Number</label>
              <input
                type="text"
                class="form-control text-white-5"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="mobilNamber"
              />
            </div>

            <div class="col-lg-6 col-md-12">
              <label class="form-label">User ID</label>
              <input
                type="text"
                class="form-control text-whit"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="userID"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div class="col-lg-6 col-md-12">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control text-white-5"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="passWord"
              />
            </div>

            <div class="col-lg-6 col-md-12">
              <label class="form-label">Password Confirmation</label>
              <input
                type="password"
                class="form-control text-whit"
                style={{ backgroundColor: "rgb(51, 51, 51,0.6)" }}
                id="passwordConfirm"
              />
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
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default AddUser;
