import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenar from '../sidebar';
import HeaderPages from '../HeaderPages';
import Footer from '../Footer';

const Courses = () => {
    const courses = [
        { title: "Here's the course name", status: 'On Going', instructor: 'Mohamed Ali', level: 1, numberOfLessons: 20, language: 'Arabic', duration: '1 month', startDate: 'Thursday, June 8th', publishedOn: 'Thursday, June 10th 12:30 PM' },
        { title: "Here's the course name", status: 'On Going', instructor: 'Mohamed Ali', level: 1, numberOfLessons: 18, language: 'English', duration: '2 months', startDate: 'Thursday, June 8th', publishedOn: 'Thursday, June 10th 12:30 PM' },
        { title: "Here's the course name", status: 'Ended', instructor: 'Mohamed Ali', level: 2, numberOfLessons: 15, language: 'French', duration: '3 weeks', startDate: 'Thursday, June 8th', publishedOn: 'Thursday, June 10th 12:30 PM' },
        { title: "Here's the course name", status: 'Ended', instructor: 'Mohamed Ali', level: 2, numberOfLessons: 25, language: 'Spanish', duration: '4 weeks', startDate: 'Thursday, June 8th', publishedOn: 'Thursday, June 10th 12:30 PM' },
        { title: "Here's the course name", status: 'Ended', instructor: 'Mohamed Ali', level: 3, numberOfLessons: 30, language: 'Arabic', duration: '6 months', startDate: 'Thursday, June 8th', publishedOn: 'Thursday, June 10th 12:30 PM' },
        { title: "Here's the course name", status: 'Ended', instructor: 'Mohamed Ali', level: 3, numberOfLessons: 10, language: 'German', duration: '5 weeks', startDate: 'Thursday, June 8th', publishedOn: 'Thursday, June 10th 12:30 PM' },
    ];
    const navigate = useNavigate();

    function movetoCreatejop(e) {
        e.preventDefault();
        navigate('/Addcoursesdetails'); // Navigate to the JobForm page
    }
    return (
        <div className="container mt-3 mb-5">
            <HeaderPages/>
            {/* Top Div */}
            <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
                <div className="top-info text-white mb-0 mb-md-5 ">
                    <div className="admin-panel-title">
                        Admin Panel
                        <div className="lineP "></div>
                    </div>
                    <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
                </div>
                <div className="d-none d-lg-block">
                    <button className=" btn-gold text-uppercase"onClick={movetoCreatejop}>Create New Courses</button>

                </div>
            </div>
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-3 col-md-12">
                 <Sidenar/>
                </div>

                {/* Main Content */}
                <div className="col-lg-9 col-md-12">
                    {/* Header */}
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-md-5 text-md-start text-center">
                            <div className="header-title">
                                Courses
                                <div className="linee mx-auto mx-md-0"></div>
                            </div>
                        </div>
                        {/* Search Bar */}
                        <div className="col-md-5 mt-3 mt-md-0">
                            <div className="search-container d-none d-md-flex">
                                <input type="text" className="search-input" placeholder="Search In Courses" />
                                <button className="search-btn"><i className="fas fa-search"></i></button>
                            </div>
                            {/* Menu for Mobile */}
                           
                        </div>
                    </div>

                    {/* Courses Table */}
                    <div className="table-responsive">
                        <table className="table table-dark articles-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Instructor</th>
                                    <th>Level</th>
                                    <th>Start Date</th>
                                    <th>Published On</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* table small */}
                                {courses.map((course, index) => (
                                    <React.Fragment key={index}>
                                        {/* Mobile View */}
                                        <tr className="d-block d-md-none px-0 w-100 col-12 mx-auto">
                                            <td className="d-flex mx-auto w-100 mt-3" colSpan="7">
                                                <div className="box mb-3 row w-100 mx-auto mt-2">
                                                    <div className="col-12 w-100 p-0 mx-auto">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h6 className="fw-bold fs-6">Course Name:</h6>
                                                            <span className={`${course.status === 'On Going' ? 'bg-primary' : 'bg-grey'} ButtonsTable fs-6 fw-medium  py-2`} style={{ width: '35%' }}>
                                                                {course.status}
                                                            </span>
                                                        </div>
                                                        <p className="mt-2 mb-0 fs-5 fw-lighter">{course.title}</p>
                                                    </div>
                                                    <div className="col-5 mt-3 p-0">
                                                        <h6 className="fw-bold fs-6">Level:</h6>
                                                        <p className="fw-lighter fs-6">{course.level}</p>
                                                    </div>
                                                    <div className="col-7 mt-3 p-0">
                                                        <h6 className="fw-bold fs-6">Number of lessons:</h6>
                                                        <p className="fw-lighter fs-6">{course.numberOfLessons}</p>
                                                    </div>
                                                    <div className="col-5 mt-3 p-0">
                                                        <h6 className="fw-bold fs-6">Language:</h6>
                                                        <p className="fw-lighter fs-6">{course.language}</p>
                                                    </div>
                                                    <div className="col-7 mt-3 p-0">
                                                        <h6 className="fw-bold fs-6">Start Date:</h6>
                                                        <p className="fw-lighter fs-6">{course.startDate}</p>
                                                    </div>
                                                    <div className="col-5 p-0">
                                                        <h6 className="fw-bold fs-6">Duration:</h6>
                                                        <p className="fw-lighter fs-6">{course.duration}</p>
                                                    </div>
                                                    <div className="col-7 p-0">
                                                        <h6 className="fw-bold fs-6">Published On:</h6>
                                                        <p className="fw-lighter fs-6">{course.publishedOn}</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <button className="btn-act me-2"><i className="fas fa-edit"></i></button>
                                                        <button className="btn-act"><i className="fas fa-trash-alt"></i></button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>


                                        {/* Desktop View */}
                                        <tr className="d-none d-md-table-row">
                                            <td>{course.title}</td>
                                            <td style={{ width: '15%' }}> 
                                                <span className={`${course.status === 'On Going' ? 'bg-primary' : 'bg-grey'} ButtonsTable`} style={{ padding: '0.5rem 1rem', borderRadius: '10px', backgroundColor: course.status === 'On Going' ? '#BF9530' : '#C4C4C4', color: '#FFF' }}>
                                                    {course.status}
                                                </span>
                                            </td>
                                            <td>{course.instructor}</td>
                                            <td className="text-center" > 
                                                {course.level}
                                            </td>
                                            <td>{course.startDate}</td>
                                            <td>{course.publishedOn}</td>
                                            <td className="text-end">
                                                <div className="action-buttons">
                                                    <button className="me-md-1 btn-act"><i className="fas fa-edit"></i></button>
                                                    <button className="btn-act"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>

                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <a href="#" className="arrow">
                            <i className="fas fa-chevron-left" style={{ color: '#BF9530' }}></i>
                        </a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <span>.....</span>
                        <a href="#" className="arrow">
                            <i className="fas fa-chevron-right" style={{ color: '#BF9530' }}></i>
                        </a>
                    </div>
                    {/* Button at the bottom */}
                    <div className="d-block d-lg-none text-center mt-5 d-md-flex justify-content-md-end ">
                        <button className="btn-gold w-100">Create New Courses</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Courses;
