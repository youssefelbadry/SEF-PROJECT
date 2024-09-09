import React, { useEffect, useRef } from "react";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
// ExamResult Component
const ExamResult = () => {
  const outerCircleRef = useRef(null);
  const innerCircleRef = useRef(null);

  // Function to set progress (based on percentage)
  const setProgress = (percent) => {
    const outerCircle = outerCircleRef.current;
    const innerCircle = innerCircleRef.current;

    const outerRadius = outerCircle.r.baseVal.value;
    const outerCircumference = 2 * Math.PI * outerRadius;

    const innerRadius = innerCircle.r.baseVal.value;
    const innerCircumference = 2 * Math.PI * innerRadius;

    // Update the stroke-dasharray and stroke-dashoffset for both circles
    outerCircle.style.strokeDasharray = `${outerCircumference}`;
    outerCircle.style.strokeDashoffset = `${outerCircumference}`;

    innerCircle.style.strokeDasharray = `${innerCircumference}`;
    innerCircle.style.strokeDashoffset = `${innerCircumference}`;

    const outerOffset =
      outerCircumference - (percent / 100) * outerCircumference;
    outerCircle.style.strokeDashoffset = outerOffset;

    const innerOffset =
      innerCircumference - (percent / 100) * innerCircumference;
    innerCircle.style.strokeDashoffset = innerOffset;
  };

  // UseEffect to run the setProgress function when the component mounts
  useEffect(() => {
    setProgress((19 / 20) * 100); // 19 out of 20 = 95%
  }, []);

  return (
    <div className="all-project">
      <div className="opicity">
        <HeaderPages />
        <div className="container mt-4">
          <div className="date-header" style={{ marginTop: "50px" }}>
            <h6 style={{ color: "white" }}>EXAM RESULT</h6>
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

          <div className="col-12 text-end text-white">
            <div>60:00</div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar"
                style={{ width: "100%", background: "#bf9b30" }}
              ></div>
            </div>
          </div>

          <div className="container mt-5 online-sections">
            <div className="row">
              {/* Top section */}
              <div className="col-lg-12 top-section-online">
                <div className="left-tob-online">
                  <div className="progress-container position-relative">
                    <svg className="progress-ring" width="180" height="180">
                      {/* Outer Circle */}
                      <circle
                        ref={outerCircleRef}
                        className="progress-ring__outer"
                        stroke="#d4af37"
                        strokeWidth="14"
                        fill="transparent"
                        r="70"
                        cx="90"
                        cy="90"
                      />
                      {/* Inner Circle */}
                      <circle
                        ref={innerCircleRef}
                        className="progress-ring__inner"
                        stroke="#d4af37"
                        strokeWidth="10"
                        fill="transparent"
                        r="55"
                        cx="90"
                        cy="90"
                      />
                    </svg>
                    <div className="progress-value position-absolute top-50 start-50 translate-middle">
                      <div className="fw-bold fs-4 text-white">19/20</div>
                    </div>
                  </div>
                </div>

                <div className="right-tob-online">
                  <button className="btn btn-warning">VIEW ANSWERS</button>
                </div>
              </div>

              {/* Bottom section */}
              <div className="bottom-section-online col-lg-12">
                <div className="left-bottom-online">
                  <p>Number of questions answered :</p>
                  <p>Number of questions not answered :</p>
                  <p>Number of questions answered correctly :</p>
                  <p>Number of wrong answers :</p>
                  <p>Time Taken:</p>
                </div>
                <div className="right-bottom-online">
                  <p>20 Questions</p>
                  <p>0 Questions</p>
                  <p>19 Questions</p>
                  <p>1 Answer</p>
                  <p>60:00 Minutes</p>
                </div>
              </div>

              {/* Mobile version of bottom section */}
              <div className="bottom-section-online-mob">
                <div className="bottom-online-mob">
                  <p>Number of questions answered :</p>
                  <p className="p">20 Questions</p>
                  <p>Number of questions not answered :</p>
                  <p className="p">0 Questions</p>
                  <p>Number of questions answered correctly :</p>
                  <p className="p">19 Questions</p>
                  <p>Number of wrong answers :</p>
                  <p className="p">1 Answer</p>
                  <p>Time Taken:</p>
                  <p className="p">60:00 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ExamResult;
