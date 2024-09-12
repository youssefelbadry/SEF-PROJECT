import React from 'react';
import detailscode from '../../Data/detailscode';
import '../../Css/Style.css';
import detailscodeexam from '../../Data/detailsuserexam'
function Registerd() {
  return (
    <div className="container">
      <div className='row mt-3 Registerdcourseparent'>
        {/* Registered Courses Section */}
        <div className='col-md-6'>
          <h2>Registered Courses</h2>
          {detailscode.map((course, index) => (
            <div className='col-12 col-md-11 mt-3 p-3 Registerdcoursecard' key={index}>
              <div className='p-1'>
                <h2>{course.coursename}</h2>
                <h5>
                  <span style={{color:'#BF9B30', fontSize:'smaller'}}>Instructor:</span>
                  <span style={{ fontSize:'smaller'}}> {course.instructor}</span>
                </h5>
                <div className='row d-flex align-items-center mt-2' style={{justifyContent:'space-between'}}>
                  <span className='col-4'>Level: {course.level}</span>
                  <button type="button" className="col-md-3 col-5 btn btn-warning">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Exams Section */}
        <div className='col-md-6 ' style={{marginLeft:'auto'}}>
          <h2 >Upcoming Exams</h2>
          <div className='row   col-sm-12 col-md-12 '>
            <div className='d-flex my-2   col-md-2 col-3 flex-column align-items-center p-3  p-md-1  '
             style={{ color: 'white', position: 'relative' , height:'fit-content' , backgroundColor:'black'}}>
              <div className='text-center  mb-2'>
                <span style={{fontSize: '.8rem'}}>7TH</span> <br />
                <span style={{fontSize: '.8rem'}}>JUN</span>
              </div>
              <button type="button" className="btn btn-warning w-100 but">
                <span>WED</span>
              </button>
            </div>
            <div className=' col-md-8 col-9 p-0 mx-0'>
              {detailscodeexam.map((course, index) => (
                <div className='col-12 mt-2 p-1 px-md-4  Registerdcoursecard' key={index}>
                  <div className='p-1'>
                    <h5>{course.coursename}</h5>
                    <h5>
                      <span style={{color:'#BF9B30', fontSize:'smaller'}}>Instructor:</span>
                      <span style={{ fontSize:'smaller'}}> {course.instructor}</span>
                    </h5>
                    <div className='row col-9 d-flex align-items-center mt-2' style={{justifyContent:'space-between'}}>
                      <span className=' col-md-6 col-9'>Level.{course.level} Exam</span>
                      <span className=' col-md-6 col-3'style={{display:'inline-block'}}><i class="fas fa-clock"></i>{course.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-sm-12 my-2'style={{zIndex:'2' , position:'relative' , color:'white' , letterSpacing:'2px' }}>
      <h2 > Here's how you've been doing for  the <span style={{color:'#BF9B30'}}>last month</span> </h2>
      </div>
    </div>
  );
}

export default Registerd;
