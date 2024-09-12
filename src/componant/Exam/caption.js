import React from 'react';
import ProgressBarComponent from './progressBar';
import QuationForm from './QuationForm';
 
const Caption = () => {
  
  return (
    <div className='container'>
  
    <div className="date-header" style={{ marginTop: "50px" }}>
              <h6 style={{ color: "white" }}>Online Exam Result</h6>
              <hr
                style={{
                  width: "150px",
                  height: "3px",
                  backgroundColor: "#bf9b30",
                }}
              />
              <h6 style={{ color: "white" }}>6th June 2023</h6>
            </div>
  
            {/* Top Section */}
            <div className="header-online mb-4">
              <div className="left-header-online">
                <h4 className="text-white">Introduction to React JS</h4>
                <p className="text-white-50">Lev. 1, 20 Marks</p>
                <p className="text-white-50">
                  <span style={{ color: "#bf9b30" }}>Instructor:</span> Tariq Ali
                </p>
              </div>
              <div className="right-header-online">
                <div>
                  <p>
                    <i className="fas fa-calendar-alt"></i> Date
                  </p>
                  <p>Monday, June 5th</p>
                </div>
                <div className="h11">
                  <div>
                    <p>
                      <i className="far fa-clock"></i> Time
                    </p>
                    <p>2:30 PM</p>
                  </div>
                  <div>
                    <p>
                      <i className="fas fa-stopwatch"></i> Duration
                    </p>
                    <p>1 Hour</p>
                  </div>
                </div>
              </div>
            </div>
  
  <div className='mx-2 '>
  <div className="container d-block d-md-none ">
        <div className="row">
          <div className="col-lg-12">
          <h3 className='text-end pe-2 pt-5'>55:00</h3>
          <div className="progress my-4 ">
            
            <ProgressBarComponent/>
            
        </div> 
          </div>
        </div>
        </div>
        <div className="container d-block d-md-none ">
        <div className="row">
          <div className="col-lg-12">
           <div className=''>
              <QuationForm/>
           </div>
          </div>
        </div>
        </div>
  </div>
    
   
   </div>
);
};

export default Caption;