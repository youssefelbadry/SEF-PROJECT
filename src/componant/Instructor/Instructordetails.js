import React from "react";
import detailscodeexam from "../../Data/detailsuserexam";
import detailscodes from "../../Data/detailsinstructorcourses";

function Instructordetails() {
  return (
    <div className="container">
      <div className="row mt-3 RegisterdcourseparentInstructor">
        {/* Registered Courses Section */}
        <div className="col-md-6">
          <h2>ONGOING Courses</h2>
          {detailscodes.map((course, index) => (
            <div
              className="col-12 mt-3 RegisterdcoursecardInstructor"
              key={index}
            >
              <div className="p-3">
                <h5>{course.coursename}</h5>
                <div className="row align-items-center pt-3 justify-content-between">
                  <div className="col-3">
                    <h5>LEV. {course.level}</h5>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <i
                      className="far fa-user px-2"
                      style={{ color: "#FFD43B" }}
                    ></i>
                    <small>{course.Numberofstudent} students</small>
                  </div>
                  <div className="col-5">
                    <button type="button" className="btn btn-warning w-100">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Exams Section */}
        <div className="col-md-6">
          <div className="row">
            <h2 className="col-8">Upcoming Exams</h2>
            <button
              className="btn btn-warning text-white col-4 d-none d-md-block"
              style={{ backgroundColor: "#bf9b30" }}
            >
              Create New
            </button>
          </div>
          <div className="row">
            {detailscodeexam.map((course, index) => (
              <div className="col-md-12 d-flex my-2" key={index}>
                <div
                  className="col-3 d-flex flex-column align-items-center p-3"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  <div className="text-center">
                    <span>8TH</span> <br />
                    <span>JUL</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning w-100 text-white"
                    style={{ backgroundColor: "#bf9b30" }}
                  >
                    <span>THU</span>
                  </button>
                </div>
                <div className="col-9 p-0">
                  <div className="p-3 RegisterdcoursecardInstructor">
                    <div className="row">
                      <h5 className="col-10">{course.coursename}</h5>
                      <i
                        className="fas fa-edit col-1"
                        style={{ color: "#FFD43B" }}
                      ></i>
                    </div>
                    <h5>
                      <span style={{ color: "#BF9B30" }}>Instructor:</span>
                      <span> {course.instructor}</span>
                    </h5>
                    <div className="row mt-2">
                      <span className="col-6">Level {course.level} Exam</span>
                      <span className="col-6">
                        <i className="fas fa-clock"></i> {course.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructordetails;
