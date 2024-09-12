import React from 'react';
import userinfocourses from '../../Data/Instructor';


import Footer from '../Footer';
import HeaderPages from '../HeaderPages'
import Divparent from './divparent';
import Instructordetails from './Instructordetails';
import CourseCard from './Coursesinstructor'
import image1 from '../../image/image1.jpg'
import BarInstructor from '../BarInstructor';
function Instructor() {
    const courses = [
        { imgSrc :image1,title: 'Python for Beginners', date: 'Wednesday, June 7th', lessons: 12 },
        {  imgSrc :image1,title: 'Python for Beginners', date: 'Wednesday, June 7th', lessons: 12 }
      ];
    
  return (
    <div>
    <BarInstructor/>
   <>
       <HeaderPages/>
       <div className="container" style={{zIndex:'7'}}>
       <div className="top-info text-white mb-0 mb-md-5 ">
                        <div className="admin-panel-title">
                            Instructor Portal
                            <div className="lineP "></div>
                        </div>
                        <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
                    </div>
           <Divparent/>

      
        
         <div className="row parentinfocoursesusersInstructor my-3 Infocoursesusers-containerInstructor">
          {userinfocourses.map((stat, index) => (
            <div className="col-md-3 col-sm-12 p-3" key={index}>
              <div className="px-4 text-center d-flex align-items-center">
                <div className="stat-box mx-2 col-4 p-3">
                  <h2 className="mb-0">{stat.count}</h2>
                </div>
                <h4 className="text-uppercase p-4 mt-2 mb-0">{stat.label}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center text-white p-2 p-md-3 col-12 col-md-6"
         style={{zIndex:'2' , position:'relative' ,fontSize:'1.5rem' , backgroundColor:' rgba(255, 255, 255, 0.199)'}}>
      <i className="far fa-check-circle me-1" style={{zIndex:'2' , position:'relative' ,fontSize:'2rem'}}> </i>
        <span>ALL CLEAR, YOU DON’T HAVE ANY EXAMS TODAY.</span>
      </div>
        </div>
    
        <Instructordetails />
        <div className="container ">
      <div className="row justify-content-between">
        {courses.map((course, index) => (
         <div className='col-12 col-md-6 '>
           <CourseCard
            key={index}
            imgSrc={course.imgSrc}
            level={course.level}
            title={course.title}
            date={course.date}
            lessons={course.lessons}
          />
          </div>
        ))}
      </div>
    </div>
 

       <Footer/>

   </>
   </div>
  )
}

export default Instructor
