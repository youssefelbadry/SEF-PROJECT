import React from "react";
import userinfocourses from "../../Data/userinfocourses";
import "../../Css/bootstrap.min.css";
import "../../Css/Style.css";
import "../../Css/all.min.css";
import courses from "../../Data/detailsstudentcourses";
import CourseCard from "./coursecard";
import Registerd from "./registerd";
import Footer from "../Footer";
import HeaderPages from "../HeaderPages";
function Infocoursesusers() {
  return (
    <>
      <HeaderPages />
      <div className="container ">
        <div className="row parentinfocoursesusers my-3 Infocoursesusers-container">
          {userinfocourses.map((stat, index) => (
            <div className="col-md-3 col-sm-12 p-3" key={index}>
              <div className="px-4 text-center d-flex align-items-center">
                <div className="stat-box mx-2 col-4 p-3">
                  <h2 className="mb-0">{stat.count}</h2>
                </div>
                <p className="text-uppercase p-4 mt-2 mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="container mt-4 p-3 d-none d-md-block  text-white rounded"
        style={{ zIndex: "2", position: "relative" }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ zIndex: "2", position: "relative" }}
        >
          <span>LEVEL : 1</span>
          <span>97%</span>
        </div>
        <div
          className="progress my-3"
          style={{ zIndex: "2", position: "relative", height: "5px" }}
        >
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "97%" }}
            aria-valuenow="97"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div
          className="d-flex align-items-center"
          style={{ zIndex: "2", position: "relative", fontSize: "1.5rem"}}
        >
          <i class="far fa-check-circle me-1"></i>
          <span>ALL CLEAR, YOU DON’T HAVE ANY EXAMS TODAY.</span>
        </div>
      </div>
      <Registerd />
      <div className="container my-5">
        <div className="row">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Infocoursesusers;
