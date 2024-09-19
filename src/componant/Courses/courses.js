import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
import BarAdmin from "../BarAdmin";
import UlPhone from "../UlPhone";
import ChoosePhone from "../ChoosePhone";

const Courses = () => {
  const coursesData = [
    {
      id: 1,
      title: "Here's the Course name",
      status: "On Going",
      courseId: "CSE-101",
      level: "1",
      startDate: "Thursday, June 8th",
      instructor: "Mohamed Ali",
      publishedOn: "Thursday, June 10th, 12:30 PM",
    },
    {
      id: 2,
      title: "Here's the Course name",
      status: "On Going",
      courseId: "CSE-102",
      level: "1",
      startDate: "Thursday, June 8th",
      instructor: "Mohamed Ali",
      publishedOn: "Thursday, June 10th, 12:30 PM",
    },
    {
      id: 3,
      title: "Here's the Course name",
      status: "Ended",
      courseId: "CSE-201",
      level: "2",
      startDate: "Thursday, June 8th",
      instructor: "Mohamed Ali",
      publishedOn: "Thursday, June 10th, 12:30 PM",
    },
    {
      id: 4,
      title: "Here's the Course name",
      status: "Ended",
      courseId: "CSE-202",
      level: "2",
      startDate: "Thursday, June 8th",
      instructor: "Mohamed Ali",
      publishedOn: "Thursday, June 10th, 12:30 PM",
    },
    {
      id: 5,
      title: "Here's the Course name",
      status: "Ended",
      courseId: "CSE-301",
      level: "3",
      startDate: "Thursday, June 8th",
      instructor: "Mohamed Ali",
      publishedOn: "Thursday, June 10th, 12:30 PM",
    },
    {
      id: 6,
      title: "Here's the Course name",
      status: "Ended",
      courseId: "CSE-302",
      level: "3",
      startDate: "Thursday, June 8th",
      instructor: "Mohamed Ali",
      publishedOn: "Thursday, June 10th, 12:30 PM",
    },
  ];

  // DRAWITEM
  const CourseItems = coursesData.map((course, index) => {
    let buttonStyle = {};
    let buttonText = "";

    if (course.status === "On Going") {
      buttonStyle = {
        backgroundColor: "#BF9B30",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "On Going";
    } else {
      buttonStyle = {
        backgroundColor: "gray",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "Ended";
    }

    return (
      <table className="table mob-table" key={index}>
        <tbody>
          <tr>
            <td className="col rr zz">
              <strong>Course Title:</strong>
              {course.title}
            </td>
            <td className="col but-lg">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col zz">
              <strong>Course Id:</strong>
              {course.courseId}
            </td>
            <td className="col time zz">
              <strong>Level:</strong>
              {course.level}
            </td>
            <td className="col time zz">
              <strong>Start Date:</strong>
              {course.startDate}
            </td>
            <td className="col time zz">
              <strong>Instructor:</strong>
              {course.instructor}
            </td>
            <td className="col time zz">
              <strong>Published On:</strong>
              {course.publishedOn}
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <div>
      <BarAdmin />
      <div className="container mt-3 mb-5 text-light">
        {/* SECTION 1 */}

        <HeaderPages />
        {/* ================================================================= */}
        {/* SECTION2 */}
        <div className='row'>
          <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
          <div className="top-info text-white mb-0 mb-md-5 ">
            <div className="admin-panel-title">
              Admin Panel
              <div className="lineP "></div>
            </div>
            <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
          </div>
        </div>
        <div className="sec2 container">
          <div class="left-nav col-sm-12 col-lg-3 det-left">
          <Sidebar/>

          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="row">
                    <UlPhone />
                    <ChoosePhone />
                  </div>
                </div>
                <div className="hheader container">
                  <div className="line-hight">
                    <h2 style={{ margin: "20px 30px" }}>Courses</h2>
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
                      <td className="col">Course Title</td>
                      <td className="col">Status</td>
                      <td className="col">Course Id</td>
                      <td className="col">Level</td>
                      <td className="col">Instructor</td>
                      <td className="col">Published On</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="col push">
              {CourseItems}
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

export default Courses;
