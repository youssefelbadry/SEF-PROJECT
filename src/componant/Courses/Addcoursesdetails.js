import React from 'react';
import Sidenar from '../sidebar';
import Footer from '../Footer';
import HeaderPages from '../HeaderPages';
import FileUpload from '../Articledetails/fileUpload'
const Addcoursesdetails = () => {
    return (
        <div>

        <div className="container moreinput">
                   
            <HeaderPages/>
        <div className='row mt-5'>
              <div className="col-lg-3 col-md-12">
                 <Sidenar/>
                </div>
        <div className="col-md-9">
            {/* First Form */}
            <form className="row g-2 text-white mb-3">
                <div className="col-lg-5 col-md-12">
                    <label htmlFor="curseName" className="form-label">Course Name</label>
                    <select className="form-select fs-6 text-white bg-dark" id="curseName">
                        <option>Front-end</option>
                        <option>Back-end</option>
                        <option>Flutter</option>
                    </select>
                </div>

                <div className="col-lg-3 col-md-12">
                    <label htmlFor="levels" className="form-label">Level</label>
                    <input type="number" className="form-control text-white bg-dark" id="levels" />
                </div>

                <div className="col-lg-4 col-md-12">
                    <label htmlFor="lesone" className="form-label">Number of Lessons</label>
                    <input type="number" className="form-control text-white bg-dark" id="lesone" />
                </div>
            </form>

            {/* Second Form */}
            <form className="row g-2 text-white mb-3">
                <div className="col-lg-3">
                    <label htmlFor="language" className="form-label">Language</label>
                    <input type="text" className="form-control text-white bg-dark" id="language" />
                </div>

                <div className="col-lg-3">
                    <label htmlFor="date" className="form-label">Start Date</label>
                    <input type="date" className="form-control text-white-50 fs-6 bg-dark" id="date" />
                </div>

                <div className="col-lg-3">
                    <label htmlFor="duration" className="form-label">Duration</label>
                    <input type="time" className="form-control text-white-50 bg-dark" id="duration" />
                </div>

                <div className="col-lg-3">
                    <label htmlFor="certificate" className="form-label">Certificate</label>
                    <input type="text" className="form-control text-white bg-dark" id="certificate" />
                </div>
            </form>

            {/* Course Assessment & Requirements */}
            <form className="row mb-3">
                <div className="col-lg-6">
                    <label htmlFor="assessmentTextarea" className="form-label text-white">Course Assessment</label>
                    <textarea className="form-control text-white bg-dark" id="assessmentTextarea" rows="3"></textarea>
                </div>

                <div className="col-lg-6">
                    <label htmlFor="requirementsTextarea" className="form-label text-white">Course Requirements</label>
                    <textarea className="form-control text-white bg-dark" id="requirementsTextarea" rows="3"></textarea>
                </div>
            </form>

            {/* Course Materials */}
            <form className="mb-3">
                <label htmlFor="materialsTextarea" className="form-label text-white">Course Materials</label>
                <textarea className="form-control text-white bg-dark" id="materialsTextarea" rows="3"></textarea>
            </form>

            {/* Publishing Date */}
            <form className="col-md-4 w-25 mb-3">
                <label htmlFor="date-publish" className="form-label text-white">Publishing Date</label>
                <input type="date" className="form-control text-white-50 fs-6 bg-dark" id="date-publish" />
            </form>

            {/* Upload Cover Photo */}
            <div className="row">
               <FileUpload/>
            </div>

            {/* Add Lesson */}
           
        </div>
        
        </div>
        <div className="container text-light bc">
      <div className="row mt-5">
        <div className="col-12 right-lesson" >
          <div className="end-header">
            <span style={{ display: "inline", fontSize: "30px" }}>Lessons</span>
          </div>
          <div className="d-flex justify-content-right mb-1 div-right">
            <span style={{ fontSize: "20px" }}>Add Lesson</span>
            <i className="fas fa-plus-circle" style={{ color: "#bf9b30", marginTop: "5px", marginLeft: "5px" }}></i>
          </div>
        </div>

        <div className="col-12  " >
          <div className="card card2 p-3 shadow-sm" style={{ height: "auto", maxWidth: "570px" }}>
            <form className="mt-3">
              <div className="trash d-flex justify-content-between" style={{ marginBottom: "25px" }}>
                <span style={{ fontSize: "20px", width: "90px" }}>Lesson 1</span>
                <i className="far fa-trash-alt" style={{ fontSize: "20px", color: "#bf9b30" }}></i>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input className="form-control" id="description" style={{ height: "80px" }} />
              </div>
              <div className="mb-3">
                <label htmlFor="url" className="form-label">Lecture URL</label>
                <input type="url" className="form-control" id="url" />
              </div>
            </form>
          </div>

          <div className="mt-3 footer-btn">
            <button className="btn col-sm-7" style={{ backgroundColor: "gray" }}>Cancel</button>
            <button className="btn col-sm-7" style={{ backgroundColor: "#bf9b30", color: "white" }}>Publish</button>
          </div>
        </div>
      </div>
    </div>
      
               
        </div>
        <Footer/>
        </div>

    );
};

export default Addcoursesdetails;
