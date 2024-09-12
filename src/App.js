import "./App.css";
import Infocoursesusers from "./componant/studentdetails/infocourses";
import "./Css/Style.css";
import { useState , useRef ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderPages from "./componant/HeaderPages";
import Sidebar from "./componant/sidebar";
import Footer from "./componant/Footer";
import PythonCourses from "./componant/PythonCourseLayout";
import Register from "./componant/Register";
import Login from "./componant/Login"
import Homepage from "./componant/Articlepages/Homepage";
import Jobs from "./componant/Jops/Jobs";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobForm from "./componant/Jops/JobForm";
import Articles from "./componant/Articledetails/Articles";
import Addarticle from "./componant/Articledetails/Addarticle";
import ApplicantJobs from "./componant/Articledetails/ApplicantJobs";
import UsersStudents from "./componant/Users/UsersStudents";
import Users from "./componant/Users/Users";
import Certific from "./componant/Users/Certific";
import PythonCourseLayout from "./componant/PythonCourseLayout";
import PythonCourseDetails from "./componant/PythonCourseDetails";
import AddUser from "./componant/Users/AddUser";
import AddCoursesdetails from "./componant/Courses/Addcoursesdetails";
import ApplyJob from "./componant/Jops/ApplyJob";
import SubmitJob from "./componant/Jops/SubmitJob";
import GetJobs from "./componant/Jops/GetJobs";
import Profile from "./componant/Profile/Profile";
import EditProfile from "./componant/Profile/EditProfile";
import Courses from "./componant/Courses/courses";
import Exam from "./componant/Exam/Exam";
import ContactUs from "./componant/studentdetails/ContactUs";
import ExamResult from "./componant/Exam/ExamResult";
import Business from "./componant/Business/Business";
import BusinessArtical from "./componant/Business/BusinessArtical";
import BusinMainBusinessess from "./componant/Business/MainBusiness";
import SecBusiness from "./componant/Business/SecBusiness";
import CVComponent from "./componant/CV/CVComponent";
import CvFormAutoEdit from "./componant/CV/CvFormAutoEdit";
import CVPreview from "./componant/CV/CvPreview";
import SliderCv from "./componant/CV/SliderCv";
import ButtonGroupComponent from "./componant/CV/ButtonGroupComponent";
import { Form1, Form2, Form3, Form4, Form5,Form6,Form7,Form8 } from "./componant/CV/AllFormsCv";
import Instructor from "./componant/Instructor/Instructor";
import Coursesinstructor from "./componant/Instructor/Coursesinstructor";
import Instructordetails from "./componant/Instructor/Instructordetails";
import Divparent from "./componant/Instructor/divparent";
import OnlineExam from "./componant/Exam/onlineExam";
import BarStudent from "./componant/BarStudent";
import CreateExam from "./componant/Exam/CreateExam";
import MoreCourses from "./componant/Courses/MoreCourses";
// ===========================SIDEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR
function Layout() {
  const [activePage, setActivePage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/Users')) setActivePage('Admins');
    else if (path.includes('/AddUser')) setActivePage('Editors');
    else if (path.includes('/instructor')) setActivePage('Instructors');
    else if (path.includes('/UserStudents')) setActivePage('Students');
    else if (path.includes('/Articles')) setActivePage('Published Articles');
    else if (path.includes('/Addarticle')) setActivePage('Scheduled Articles');
    else if (path.includes('/Jobs')) setActivePage('Published Jobs');
    else if (path.includes('/ApplicantJobs')) setActivePage('Saved Jobs');
    else if (path.includes('/Courses')) setActivePage('Published Courses');
    else if (path.includes('/jobForm')) setActivePage('Scheduled Courses');
    else setActivePage('');
  }, [location]);

  return (
    <div className="container">
      <div className="row">
        <Sidebar activePage={activePage} />
        <div className="col-lg-9 col-md-12">
          <Routes>
            <Route path="/Users" element={<Users />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/jobForm" element={<JobForm />} />
            <Route path="/UserStudents" element={<UsersStudents />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Addarticle" element={<Addarticle />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/ApplicantJobs" element={<ApplicantJobs />} />
            <Route path="/Courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeForm, setActiveForm] = useState(0);
  const componentRef = useRef();

  const handleSlideChange = (slideIndex) => {
    setActiveForm(slideIndex);
  };

  return (
    <Router>
      <Routes>
        <Route path="Register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobForm" element={<JobForm />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Addarticle" element={<Addarticle />} />
        <Route path="/ApplicantJobs" element={<ApplicantJobs />} />
        <Route path="/UserStudents" element={<UsersStudents />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Certific" element={<Certific />} />
        <Route path="/Infocoursesusers" element={<Infocoursesusers />} />
        <Route path="/PythonCourseLayout" element={<PythonCourseLayout />} />
        <Route path="/PythonCourseDetails" element={<PythonCourseDetails />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/AddCoursesdetails" element={<AddCoursesdetails />} />
        <Route path="/ApplyJob" element={<ApplyJob />} />
        <Route path="/SubmitJob" element={<SubmitJob />} />
        <Route path="/GetJobs" element={<GetJobs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/examresult" element={<ExamResult />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/main" element={<BusinMainBusinessess />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/divparent" element={<Divparent />} />
        <Route path="/onlineExam" element={<OnlineExam />} />
        <Route path="/createexam" element={<CreateExam />} />
        <Route path="/morecourses" element={<MoreCourses />} />
        {/* ===========================CV============================ */}
        <Route path="/cv" element={
          <div >
            <BarStudent />
            <div >
              <HeaderPages />
              <div className="admin-banel container text-light">
            <div>
              <span>Admin Panel</span>
              <div className="line"></div>
              <span>6th June 2023</span>
            </div>
          </div>
          <div className="hheader container text-light">
                    <div className="line-hight">
                      <h1>Customize Your cv</h1>
                      <p>
                        Here you can create your CV by answering questions <br/> and
                        getting it ready for download or applying to jobs <br/>
                        through the platform
                      </p>
                      <div className="line"></div>
                    </div>
                  </div>
              <div className="container ">
                <SliderCv handleSlideChange={handleSlideChange} activeForm={activeForm} />
                <CvFormAutoEdit>
                  <div className="row mt-4 bg-form-cv mx-auto rounded px-0">
                    <div className="col-md-6 pe-md-0">
                      {activeForm === 0 && <Form1 />}
                      {activeForm === 1 && <Form2 />}
                      {activeForm === 2 && <Form3 />}
                      {activeForm === 3 && <Form4 />}
                      {activeForm === 4 && <Form5 />}
                      {activeForm === 5 && <Form6 />}
                      {activeForm === 6 && <Form7 />}
                      {activeForm === 7 && <Form8 />}
                    </div>
                    <div className="col-md-6">
                      <CVComponent ref={componentRef} />
                    </div>
                  </div>
                  <ButtonGroupComponent componentRef={componentRef} activeForm={activeForm} setActiveForm={setActiveForm} />
                </CvFormAutoEdit>
              </div>
              <Footer />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
