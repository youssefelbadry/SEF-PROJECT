import './App.css';
import Infocoursesusers from './componant/studentdetails/infocourses'
import './Css/Style.css';
import PythonCourses from './componant/PythonCourseLayout'
import Homepage from './componant/Articlepages/Homepage';
import Jobs from './componant/Jops/Jobs';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobForm from './componant/Jops/JobForm';
import Articles from './componant/Articledetails/Articles';
import Addarticle from './componant/Articledetails/Addarticle';
import ApplicantJobs from './componant/Articledetails/ApplicantJobs';
import UsersStudents from './componant/Users/UsersStudents';
import Users from './componant/Users/Users';
import Certific from './componant/Users/Certific';
import PythonCourseLayout from './componant/PythonCourseLayout';
import PythonCourseDetails from './componant/PythonCourseDetails';
import AddUser from './componant/Users/AddUser';
import AddCoursesdetails from './componant/Courses/Addcoursesdetails';
import ApplyJob from './componant/Jops/ApplyJob';
import SubmitJob from './componant/Jops/SubmitJob';
import GetJobs from './componant/Jops/GetJobs';
import Profile from './componant/Profile/Profile';
import EditProfile from './componant/Profile/EditProfile';
import Courses from './componant/Courses/courses';
import Exam from './componant/Exam/Exam';
import ContactUs from './componant/studentdetails/ContactUs';
import ExamResult from './componant/Exam/ExamResult';
import Business from './componant/Business/Business';
import BusinessArtical from './componant/Business/BusinessArtical';
import BusinMainBusinessess from './componant/Business/MainBusiness';
import SecBusiness from './componant/Business/SecBusiness';
import AllFormsCv from './componant/CV/AllFormsCv';
import CVComponent from './componant/CV/CVComponent';
import CvFormAutoEdit from './componant/CV/CvFormAutoEdit';
import CvPreview from './componant/CV/CvPreview';
import SliderCv from './componant/CV/SliderCv';


function App() {
  return (

     <Router>
            <Routes>
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
                <Route path="/exam" element={<Exam/>} />
                <Route path="/examresult" element={<ExamResult/>} />
                <Route path="/contactus" element={<ContactUs/>} />
                <Route path="/business" element={<Business/>} />
                <Route path="/businessArtical" element={<BusinessArtical/>} />
                <Route path="/main" element={<BusinMainBusinessess/>} />
                <Route path="/secBusiness" element={<SecBusiness/>} />
                {/* <Route path="/allformsCv" element={<AllFormsCv/>} /> */}
                {/* <Route path="/cvcomponent" element={<CVComponent/>} /> */}
                {/* <Route path="/cvformAutoEdit" element={<CvFormAutoEdit/>} /> */}
                {/* <Route path="/cvpreview" element={<CvPreview/>} /> */}
                {/* <Route path="/sliderCv" element={<SliderCv/>} /> */}

            </Routes>
        </Router>

  );
}

export default App;

/*
    {/* <Jobs/> 
      {/* <JobForm/> 
      {/* <Articles/> 
      {/* <ApplicantJobs/> 
      {/* < Main /> 
      {/* <AddUser/> 
     {/* <Homepage/> 
    // </div>
//  <div className='App'>
//   <PythonCourses/>
    // <div className="studentdetails">
     {/* <Infocoursesusers/> 
     {/* <JobForm/> 
//  </div>


*/

