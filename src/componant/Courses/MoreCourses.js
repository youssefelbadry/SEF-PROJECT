import React, { useState } from "react";
import logo from "../../image/seff_logo_transparent.png";
import HeaderPages from "../HeaderPages";
import CoursesData2 from "../../Data/CoursesData2";
import none from "../../image/image1.jpg";
import Footer from "../Footer";

function MoreCourses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of available courses
  const courses = [
    {
      title: "Python for Beginners",
      instructor: "Mohammed Nour",
      date: "Wednesday, June 7th",
      lessons: "12 lessons",
    },
    {
      title: "JavaScript Essentials",
      instructor: "Ahmed Ali",
      date: "Thursday, June 8th",
      lessons: "15 lessons",
    },
    {
      title: "React Basics",
      instructor: "Sara Mohamed",
      date: "Friday, June 9th",
      lessons: "10 lessons",
    },
    {
      title: "Data Structures in C++",
      instructor: "Khaled Hassan",
      date: "Saturday, June 10th",
      lessons: "8 lessons",
    },
    {
      title: "Node.js Advanced",
      instructor: "Yasser Samir",
      date: "Sunday, June 11th",
      lessons: "10 lessons",
    },
    {
      title: "Machine Learning",
      instructor: "Rania Mostafa",
      date: "Monday, June 12th",
      lessons: "20 lessons",
    },
  ];
  const Courses2Item = CoursesData2.map((course) => {
    return (
      <div className="row course-row align-items-center ">
        <div className="col-sm-12 col-md-1">
          <img src={none} alt={course.title} className="course-image" />
        </div>
        <div className="col-md-6 px-5">
          <h5 className="col-sm-6 course-title">{course.title}</h5>
          <p className="col-sm-12 course-lessons">{course.lessons}</p>
          <p className="col-sm-12 course-instructor">
            <span className="instructor-label">Instructor :</span>{" "}
            {course.instructor}
          </p>
        </div>
        <div className="col-md-2">
          <p className="course-start-date">{course.startDate}</p>
        </div>
        <div className="col-sm-6 col-md-1">
          <p className="course-level">{course.level}</p>
        </div>
        <div className="col-sm-12 col-md-2 text-end">
          <a href="#" className="col-sm-12 btn  enroll-btn" style={{backgroundColor:'#BF9B30'}}>
            ENROLL
          </a>
          <a href="#" className="view-details">
            View Details
          </a>
        </div>
      </div>
    );
  });

  // Move to the next slide
  const handleNext = () => {
    const newIndex = currentIndex + 4 < courses.length ? currentIndex + 4 : 0;
    setCurrentIndex(newIndex);
  };

  // Move to the previous slide
  const handlePrev = () => {
    const newIndex =
      currentIndex - 4 >= 0 ? currentIndex - 4 : courses.length - 4;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="opicity">
        <HeaderPages />
        {/* ================================================================= */}
        {/* SECTION2 */}
        <div className="admin-banel container">
          <div>
            <span>Admin Panel</span>
            <div className="line"></div>
            <span>6th June 2023</span>
          </div>
        </div>

        {/* =========================================================================== */}
        <div className="container exam-contact-body">
          <div className="row">
            <div className="col-lg-12 tob-cont-body">
              <div>
                <h2>Upcoming Exams</h2>
              </div>

              <div>
                {/* Display header and controls */}
                <div className="d-flex container  justify-content-between align-items-center mx-auto">
                  <h4 className="text-white ">New Courses</h4>
                  <div className="pagination ">
                    <a
                      href="#"
                      className="arrow"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePrev();
                      }}
                    >
                      <i
                        className="fas fa-chevron-left"
                        style={{ color: "#BF9530" }}
                      ></i>
                    </a>

                    <a
                      href="#"
                      className="arrow ms-3"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNext();
                      }}
                    >
                      <i
                        className="fas fa-chevron-right"
                        style={{ color: "#BF9530" }}
                      ></i>
                    </a>
                  </div>
                </div>

                {/* Display 4 courses in grid */}
                <div className="container mb-3">
                  <div className="row   ">
                    {courses
                      .slice(currentIndex, currentIndex + 4)
                      .map((course, index) => (
                        <div
                          key={index}
                          className="col-xl-3 col-lg-4  col-md-6 col-sm-12"
                        >
                          <div
                            className="card text-white backgroundRightDiv px-0 mx-0 w-100 mt-3 mt-xl-0"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.308)" }}
                          >
                            <div className="position-relative p-3">
                              {/* Course image with full width */}
                              <img
                                src="https://via.placeholder.com/300x150"
                                className="card-img-top"
                                alt="course"
                                style={{
                                  objectFit: "cover",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />

                              {/* Overlay with title and instructor */}
                              <div
                                className="position-absolute top-0 start-0 end-0 bottom-0 m-3 d-flex align-items-end"
                                style={{
                                  background:
                                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 40%, transparent 100%)",
                                }}
                              >
                                <div className="ps-2 w-100 text-start">
                                  {/* Display course title and instructor */}
                                  <h5 className="card-title mb-0 text-white">
                                    {course.title}
                                  </h5>
                                  <p className="card-text Browse mb-0 fw-bold">
                                    Instructor{" "}
                                    <span className="text-white">
                                      : {course.instructor}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="card-body">
                              {/* Show date and lessons information */}
                              <p className="card-text fs-6">
                                <i className="bi bi-calendar Browse me-2"></i>{" "}
                                {course.date} <br />
                                <i className="bi bi-journal-bookmark Browse me-2"></i>{" "}
                                {course.lessons} lessons
                              </p>

                              {/* Button for course enrollment */}
                              <a
                                href="#"
                                className="btn-gold w-100 text-center d-block"
                              >
                                ENROLL
                              </a>

                              {/* Link for course details */}
                              <a
                                href="#"
                                className="d-block mt-3 text-white"
                                style={{ textDecoration: "none" }}
                              >
                                View Details{" "}
                                <i className="fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="hheader container">
                  <div className="line-hight">
                    <h2 style={{ margin: "20px 30px" }}>Presvious Exams</h2>
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
            <div className="col-lg-12 botton-cont-body mt-5">
              {Courses2Item}
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
        <Footer/>
      </div>
    </div>
  );
}

export default MoreCourses;
