import React, { useState } from "react";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";

function Exam() {
    const ExamData = [
        {
            id:1,
            letter1p1:"Wednesday, June 7th",
            letter1p2:"12:30",
            letter2h4:"Introduction toData Analysis",
            letter2span:"Sarah Ahmed",
            letter3h2:"LEV.1",
            letter3h4:"90/100",
        },{
            id:2,
            letter1p1:"Wednesday, June 7th",
            letter1p2:"12:30",
            letter2h4:"Introduction toData Analysis",
            letter2span:"Alaa Sameer",
            letter3h2:"LEV.1",
            letter3h4:"99/100",
        },{
            id:3,
            letter1p1:"Wednesday, June 7th",
            letter1p2:"12:30",
            letter2h4:"Introduction toData Analysis",
            letter2span:"Alaa Sameer",
            letter3h2:"LEV.1",
            letter3h4:"99/100",
        },
    ]
  const ExamItem = ExamData.map((item) => {
    return (
      <div className="col-lg-12 content" style={{ marginTop: "15px" }}>
        <div className="letter-1">
          <p>
            <i
              className="far fa-calendar-alt mx-1"
              style={{ color: "#bf9b30" }}
            ></i>
            {item.letter1p1}
          </p>
          <p>
            <i className="far fa-clock mx-1" style={{ color: "#bf9b30" }}></i>
            {item.letter1p2}
          </p>
        </div>

        <div className="letter-2">
          <h4>{item.letter2h4}</h4>
          <span>
            Instructor: <span className="text-light">{item.letter2span}</span>
          </span>
        </div>

        <div
          className="letter-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <h2>{item.letter3h2}</h2>
          <h4>{item.letter3h4}</h4>
        </div>

        <div className="letter-5">
          <a href="home.html">
            <button className="btn btn-secondary">JOIN EXAM</button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="text-light">
  
          <HeaderPages/>
          {/* ================================================================= */}
          {/* SECTION2 */}
          <div className="admin-banel container">
            <div>
              <span>EXAMS</span>
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

                <div className="content" style={{ marginTop: "15px" }}>
                  <div className="letter-1">
                    <p>
                      <i
                        className="far fa-calendar-alt mx-1"
                        style={{ color: "#bf9b30" }}
                      ></i>
                      Wednesday, June 7th
                    </p>
                    <p>
                      <i
                        className="far fa-clock mx-1"
                        style={{ color: "#bf9b30" }}
                      ></i>
                      12:30
                    </p>
                  </div>

                  <div className="letter-2">
                    <h4>
                      Introduction to <br />
                      Data Analysis
                    </h4>
                    <span>
                      Instructor:
                      <span className="text-light"> Mohamed Nour</span>
                    </span>
                  </div>

                  <div className="letter--3">
                    <h2>LEV.1</h2>
                  </div>

                  <div className="letter-4">
                    <h4>NA</h4>
                  </div>

                  <div className="letter--5">
                    <a href="home.html">
                      <button className="btn btn-secondary">JOIN EXAM</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 botton-cont-body mt-5">
                <div>
                  <h2>Presvious Exams</h2>
                </div>
                {ExamItem}
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
            
          </div>
          
       <Footer/>
        
    </div>
  );
}

export default Exam;
