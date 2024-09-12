// import React from 'react'
// // const categories = ['Users', 'Articles' , 'Jobs' , 'Courses'];

// function Sidebar() {
//   return (
//     <div className="sidebar">
//     <div className="left-content d-none d-md-block">
//     <ul className="sidebar-list pt-2 py-md-3 px-3 ">
//         <li className='title'>Users</li>
//         <ul className="sub-list">
//             <li>Admins</li>
//             <li>Editors</li>
//             <li>Instructors</li>
//             <li>Students</li>
//         </ul>
//         <li className='title titleActive'>Articles</li>
//         <ul className="sub-list">
//             <li>Published Articles</li>
//             <li>Scheduled Articles</li>
//             <li>Saved Drafts</li>
//         </ul>
//         <li className='title'>Jobs</li>
//         <ul className="sub-list">
//             <li>Published Jobs</li>
//             <li>Saved Drafts</li>
//         </ul>
//         <li className='title'>Courses</li>
//         <ul className="sub-list">
//             <li>Published Courses</li>
//             <li>Scheduled Courses</li>
//             <li>Saved Drafts</li>
//         </ul>
//     </ul>
// </div>
// {/* <div className="d-block d-md-none mb-3">
//   <select
//     id="categorySelect"
//     className="form-select border border-0 bg-red text-center"
//     style={{ fontSize: '1.2rem' }} // Adjust the font size as needed
//   >
//     {categories.map((category, index) => (
//       <option key={index} className="text-center">
//         {category}
//       </option>
//     ))}
//   </select>
// </div> */}


// </div>
//   )
// }

// export default Sidebar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDropdown from "./useDropdown"; // Importing the custom hook

const Sidebar = ({ activePage }) => {
  const [dropdownContent, setDropdownContent] = useState("Published Jobs"); // Initial dropdown content
  const [activeTitle, setActiveTitle] = useState("");

  const { dropdownStates, toggleDropdown, closeAllDropdowns, dropdownRef } =
    useDropdown({
      Users: false,
      Articles: false,
      Jobs: false,
      Courses: false,
    });

  const handleTitleClick = (title) => {
    setActiveTitle(title);
    switch (title) {
      case "Users":
        setDropdownContent("Admins");
        break;
      case "Articles":
        setDropdownContent("Published Articles");
        break;
      case "Jobs":
        setDropdownContent("Published Jobs");
        break;
      case "Courses":
        setDropdownContent("Published Courses");
        break;
      default:
        setDropdownContent("Published Jobs");
        break;
    }
  };

  // Ensure activePage is a string
  const page = typeof activePage === 'string' ? activePage : '';

  return (
    <>
      

      <div className="col-lg-3 col-md-12 mb-4 mb-md-5 w-100">
        <div className="left-content d-flex flex-row d-md-block">
          <ul className="sidebar-list justify-content-center mx-auto my-0 pt-2 py-md-3 px-3 d-flex flex-row flex-md-column">
            {/* Users Section */}
            <li
              className={`title ${["Admins", "Editors", "Instructors", "Students"].includes(page) ? "active active-title" : ""} d-none d-md-block`}
              onClick={() => handleTitleClick("Users")}
            >
              Users
            </li>

            <li
              className={`title ${page === "Users" ? "active active-title d-md-none" : "d-md-none"}`}
              onClick={() => handleTitleClick("Users")}
            >
              Users
            </li>
            <ul className="sub-list">
              <li>
                <Link className={page === "Admins" ? "active-link" : ""} to="/Users">Admins</Link>
              </li>
              <li>
                <Link className={page === "Editors" ? "active-link" : ""} to="/AddUser">Editors</Link>
              </li>
              <li>
                <Link className={page === "Instructors" ? "active-link" : ""} to="/instructor">Instructors</Link>
              </li>
              <li>
                <Link className={page === "Students" ? "active-link" : ""} to="/UserStudents">Students</Link>
              </li>
            </ul>

            {/* Articles Section */}
            <li
              className={`title ${page.includes("Articles") ? "active" : ""} d-none d-md-block`}
              onClick={() => handleTitleClick("Articles")}
            >
              Articles
            </li>

            <li
              className={`title ${page === "Articles" ? "active active-title d-md-none" : "d-md-none"}`}
              onClick={() => handleTitleClick("Articles")}
            >
              Articles
            </li>
            <ul className="sub-list">
              <li>
                <Link className={page === "Published Articles" ? "active-link" : ""} to="/Articles">Published Articles</Link>
              </li>
              <li>
                <Link className={page === "Scheduled Articles" ? "active-link" : ""} to="/Addarticle">Scheduled Articles</Link>
              </li>
              <li>
                <Link className={page === "Saved Drafts" ? "active-link" : ""} to="/articles/drafts">Saved Drafts</Link>
              </li>
            </ul>

            {/* Jobs Section */}
            <li
              className={`title ${page.includes("Jobs") ? "active" : ""} d-none d-md-block`}
              onClick={() => handleTitleClick("Jobs")}
            >
              Jobs
            </li>

            <li
              className={`title ${page === "Jobs" ? "active active-title d-md-none" : "d-md-none"}`}
              onClick={() => handleTitleClick("Jobs")}
            >
              Jobs
            </li>
            <ul className="sub-list">
              <li>
                <Link className={page === "Published Jobs" ? "active-link" : ""} to="/Jobs">Published Jobs</Link>
              </li>
              <li>
                <Link className={page === "Saved Drafts" ? "active-link" : ""} to="/ApplicantJobs">Saved Drafts</Link>
              </li>
            </ul>

            {/* Courses Section */}
            <li
              className={`title ${page.includes("Courses") ? "active" : ""} d-none d-md-block`}
              onClick={() => handleTitleClick("Courses")}
            >
              Courses
            </li>

            <li
              className={`title ${page === "Courses" ? "active active-title d-md-none" : "d-md-none"}`}
              onClick={() => handleTitleClick("Courses")}
            >
              Courses
            </li>
            <ul className="sub-list">
              <li>
                <Link className={page === "Published Courses" ? "active-link" : ""} to="/Courses">Published Courses</Link>
              </li>
              <li>
                <Link className={page === "Scheduled Courses" ? "active-link" : ""} to="/AddCoursesdetails">Scheduled Courses</Link>
              </li>
              <li>
                <Link className={page === "Saved Drafts" ? "active-link" : ""} to="/PythonCourseDetails">Saved Drafts</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      {/* Dropdown for mobile */}
      <div className="d-block d-md-none mb-2" ref={dropdownRef}>
        <div className="dropdown">
          <button
            className="btn py-2 dropdown-toggle dropdowntoggleSideBar w-100 d-flex justify-content-between align-items-center"
            onClick={() => toggleDropdown(dropdownContent)}
          >
            selected item
            <i className={`fas fa-chevron-${dropdownStates[dropdownContent] ? "up" : "down"} dropdown-arrow`}></i>
          </button>

          {dropdownStates[dropdownContent] && (
            <ul className="dropdown-menu show w-100-important">
              {dropdownContent === "Admins" && (
                <>
                  <li><Link className={`dropdown-item ${page === "Admins" ? "active" : ""}`} to="/admins" onClick={() => closeAllDropdowns()}>Admins</Link></li>
                  <li><Link className={`dropdown-item ${page === "Editors" ? "active" : ""}`} to="/editors" onClick={() => closeAllDropdowns()}>Editors</Link></li>
                  <li><Link className={`dropdown-item ${page === "Instructors" ? "active" : ""}`} to="/instructors" onClick={() => closeAllDropdowns()}>Instructors</Link></li>
                  <li><Link className={`dropdown-item ${page === "Students" ? "active" : ""}`} to="/students" onClick={() => closeAllDropdowns()}>Students</Link></li>
                </>
              )}
              {dropdownContent === "Published Articles" && (
                <>
                  <li><Link className={`dropdown-item ${page === "Published Articles" ? "active" : ""}`} to="/Articles" onClick={() => closeAllDropdowns()}>Published Articles</Link></li>
                  <li><Link className={`dropdown-item ${page === "Scheduled Articles" ? "active" : ""}`} to="/AddArticles" onClick={() => closeAllDropdowns()}>Scheduled Articles</Link></li>
                  <li><Link className={`dropdown-item ${page === "Saved Drafts" ? "active" : ""}`} to="/Addarticle" onClick={() => closeAllDropdowns()}>Saved Drafts</Link></li>
                </>
              )}
              {dropdownContent === "Published Jobs" && (
                <>
                  <li><Link className={`dropdown-item ${page === "Published Jobs" ? "active" : ""}`} to="/jobs/published" onClick={() => closeAllDropdowns()}>Published Jobs</Link></li>
                  <li><Link className={`dropdown-item ${page === "Saved Drafts" ? "active" : ""}`} to="/jobs/drafts" onClick={() => closeAllDropdowns()}>Saved Drafts</Link></li>
                </>
              )}
              {dropdownContent === "Published Courses" && (
                <>
                  <li><Link className={`dropdown-item ${page === "Published Courses" ? "active" : ""}`} to="/courses/published" onClick={() => closeAllDropdowns()}>Published Courses</Link></li>
                  <li><Link className={`dropdown-item ${page === "Scheduled Courses" ? "active" : ""}`} to="/courses/scheduled" onClick={() => closeAllDropdowns()}>Scheduled Courses</Link></li>
                  <li><Link className={`dropdown-item ${page === "Saved Drafts" ? "active" : ""}`} to="/courses/drafts" onClick={() => closeAllDropdowns()}>Saved Drafts</Link></li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
