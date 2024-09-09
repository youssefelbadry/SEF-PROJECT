import React, { useState } from "react";
import Header from "../HeaderPages";
import "./Badry.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

function ApplyJob() {
  const navigate = useNavigate();

  function movetoSubmitjop(e) {
    e.preventDefault();
    navigate("/SubmitJob"); // Navigate to the JobForm page
  }
  // ===============================================
  const [location, setLocation] = useState("Cairo");
  const [jobType, setJobType] = useState({
    fullTime: false,
    partTime: true,
    remote: false,
  });
  const [level, setLevel] = useState({
    entryLevel: false,
    intermediate: true,
    expert: false,
  });
  const [salaryRange, setSalaryRange] = useState({
    under4000: false,
    between400010000: true,
    moreThan10000: false,
  });

  const handleJobTypeChange = (e) => {
    setJobType({ ...jobType, [e.target.name]: e.target.checked });
  };

  const handleLevelChange = (e) => {
    setLevel({ ...level, [e.target.name]: e.target.checked });
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRange({ ...salaryRange, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <div className="all-project">
        <div className="opicity">
          <Header />
          {/* ================================================================= */}
          {/* SECTION2 */}
          <div className="admin-banel container">
            <div>
              <span>Admin Panel</span>
              <div className="line"></div>
              <span>6th June 2023</span>
            </div>
          </div>
          <div className="hheader container">
            <div className="line-hight">
              <h1>Look for a job ?</h1>
              <p>
                Here you can find your bestmatch <br />
                between 1000s of updated and available positions.
              </p>
              <div className="line"></div>
            </div>
            <div className="search">
              <div controlId="floatingInputGrid" className=" form-floating">
                <div className="search-container">
                  <input
                    className="form form-control"
                    type="text"
                    placeholder="Search for a job"
                  />
                  <i class="fas fa-search search-icon"></i>
                </div>
              </div>

              <div className="btn-admin">
                <button className="btn" style={{ backgroundColor: "#bf9b30" }}>
                  SEARCH
                </button>
              </div>
            </div>
          </div>
          {/* =========================================================================== */}
          <div className="container contact-body">
            <div className="row">
              <div className="col-lg-4 left-cont-body">
                <div className="filter-container">
                  <div className="filter-header">
                    <h5>Filters</h5>
                    <h5 style={{ color: "#bf9b30" }}>Clear All</h5>
                  </div>
                  <div className="filter-group">
                    <label>Location</label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="filter-select"
                    >
                      <option value="Cairo">Cairo</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Job Type</label>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="fullTime"
                        checked={jobType.fullTime}
                        onChange={handleJobTypeChange}
                      />
                      <label className="filter-label">Full Time</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="partTime"
                        checked={jobType.partTime}
                        onChange={handleJobTypeChange}
                      />
                      <label className="filter-label">Part Time</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="remote"
                        checked={jobType.remote}
                        onChange={handleJobTypeChange}
                      />
                      <label className="filter-label">Remote</label>
                    </div>
                  </div>
                  <div className="filter-group">
                    <label>Level</label>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="entryLevel"
                        checked={level.entryLevel}
                        onChange={handleLevelChange}
                      />
                      <label className="filter-label">Entry Level</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="intermediate"
                        checked={level.intermediate}
                        onChange={handleLevelChange}
                      />
                      <label className="filter-label">Intermediate</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="expert"
                        checked={level.expert}
                        onChange={handleLevelChange}
                      />
                      <label className="filter-label">Expert</label>
                    </div>
                  </div>
                  <div className="filter-group">
                    <label>Salary Range</label>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="under4000"
                        checked={salaryRange.under4000}
                        onChange={handleSalaryRangeChange}
                      />
                      <label className="filter-label">Under 4000 EGP</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="between400010000"
                        checked={salaryRange.between400010000}
                        onChange={handleSalaryRangeChange}
                      />
                      <label className="filter-label">
                        Between 4000 & 10000 EGP
                      </label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="moreThan10000"
                        checked={salaryRange.moreThan10000}
                        onChange={handleSalaryRangeChange}
                      />
                      <label className="filter-label">
                        More Than 10000 EGP
                      </label>
                    </div>
                  </div>
                </div>
                <button className="create-cv-button mt-3">
                  CREATE YOUR CV
                </button>
              </div>

              <div className="col-lg-8 right-cont-body">
                <div>
                  <div className="tob-cont">
                    <div className="tob-cont-1">
                      <div className="q">
                        <span>
                          {" "}
                          <i
                            class="fas fa-sliders-h"
                            style={{
                              fontSize: "40px",
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            IT{" "}
                          </i>
                        </span>
                        <h3> Front-end React JS Developer</h3>

                        <p>Eptikar IT Solutions, Obour City</p>
                      </div>
                      <div className="price-course">
                        <p>5000 EGP - 8000 EGP</p>
                        <p>
                          <i
                            className="fas fa-map-marker-alt"
                            style={{ color: "#bf9b30", fontSize: "20px" }}
                          ></i>{" "}
                          On Site
                        </p>
                      </div>
                    </div>

                    <div className="tob-cont-2 mt-4">
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </div>
                      <div className="tob-cont-button mt-4">
                        <button className="btn btn-outline-warning">
                          React JS
                        </button>{" "}
                        <button className="btn btn-outline-warning">
                          Development
                        </button>
                      </div>
                    </div>

                    <div className="tob-cont-1 mt-4">
                      <div>
                        <span>
                          <i
                            className="far fa-clock"
                            style={{ fontSize: "20px" }}
                          ></i>{" "}
                          2 h ago
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4>About us</h4>
                      <p>
                        At vero eos et accusamus et lusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores
                      </p>
                    </div>
                    <div className="mt-4 y-2">
                      <h4>Job Description</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4>Job Requirements</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <button
                        className="btn px-5"
                        style={{ backgroundColor: "#bf9b30" }}
                        onClick={movetoSubmitjop}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ApplyJob;
