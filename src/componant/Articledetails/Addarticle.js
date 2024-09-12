import React from "react";
import Sidenar from "../sidebar";
import CategoryDropdown from "./Catogray";
import DateInput from "./DateInput";
import FileUpload from "./fileUpload";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
import BarAdmin from "../BarAdmin";

function Addarticle() {
  return (
    <div>
      <BarAdmin/>
    <div className="text-light">
      <HeaderPages />

      <div className="container   mt-5 ">
        <div className=" pt-5 mt-5 mb-5">
          <h4 className="textGray cap ">Create New Artical</h4>
          <div className="line1 mb-2 "></div>
          <p className="">6th June 2023</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <Sidenar />
          </div>

          <div className="col-lg-8  col-md-12">
            <div className=" p-4 pb-2  row ">
              <div className=" p-2 col-lg-9 col-md-12">
                <h4 className="text-white cap">add artical details</h4>
                <div className="line2  mb-2 "></div>
              </div>
              <div className="col-lg-3  col-md-12 d-none d-md-block">
                <button
                  className="form-control btn btn1 ms-2  px-2 py-1"
                  style={{ backgroundColor: "#BF9530" }}
                  type="submit"
                >
                  <a className="nav-link text-white " href="#">
                    publish
                  </a>
                </button>
              </div>
            </div>
            <div className="form  mt-5">
              <form className="container">
                <div className="mb-3">
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="input1">
                        <label
                          htmlFor="textInput"
                          className="form-label cap capli fs-6"
                        >
                          Article Title
                        </label>
                        <input
                          type="text"
                          className="form-control border border-0 bg-gray "
                          id="textInput"
                          name="textInput"
                          style={{
                            transition: "background-color 0.3s ease",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="input2">
                        <CategoryDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 col-12">
                  <label htmlFor="textArea" className="form-label cap capli">
                    Content
                  </label>
                  <textarea
                    className="form-control bg-gray border border-0 "
                    id="textArea"
                    name="textArea"
                    rows="3"
                    style={{
                      transition: "background-color 0.3s ease",
                      padding: "100px",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <DateInput />
                </div>

                <div className="mb-3">
                  <div className="dragDrop col-12" style={{ width: "100%" }}>
                    <FileUpload />
                  </div>
                </div>

                <div className="mb-3 d-block d-md-flex justify-content-end my-3">
                  <button
                    type="button"
                    className="btn col-md-2 col-12 ms-1 btn-secondary  text-white py-2 px-2"
                    style={{ fontWeight: "500" }}
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
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default Addarticle;
