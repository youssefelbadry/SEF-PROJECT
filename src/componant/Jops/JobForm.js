import React, { useReducer, useEffect, useCallback } from "react";
import axios from "axios";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
import BarAdmin from "../BarAdmin";

// Reducer function for form data
const formDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "ADD_SKILL":
      if (state.skills.includes(action.skill)) return state;
      return {
        ...state,
        skills: [...state.skills, action.skill],
        skillInput: "",
      };
    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((skill) => skill !== action.skill),
      };
    case "SET_LOGO":
      return { ...state, logo: action.logo };
    default:
      return state;
  }
};

// Reducer function for dropdown states
const dropdownReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return { ...state, [action.dropdown]: !state[action.dropdown] };
    case "CLOSE_ALL_DROPDOWNS":
      return Object.keys(state).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {}
      );
    default:
      return state;
  }
};

const JobForm = () => {
  const initialFormData = {
    companyName: "",
    field: "",
    location: "",
    jobType: "",
    position: "",
    salaryRangeFrom: "",
    salaryRangeTo: "",
    currency: "",
    jobDescription: "",
    jobRequirements: "",
    skills: [],
    skillInput: "",
    logo: null,
  };

  const initialDropdownStates = {
    field: false,
    location: false,
    jobType: false,
    currency: false,
  };

  const [formData, dispatchFormData] = useReducer(
    formDataReducer,
    initialFormData
  );
  const [dropdownStates, dispatchDropdown] = useReducer(
    dropdownReducer,
    initialDropdownStates
  );

  const toggleDropdown = useCallback((dropdown) => {
    dispatchDropdown({ type: "TOGGLE_DROPDOWN", dropdown });
  }, []);

  const handleClickOutside = useCallback(() => {
    dispatchDropdown({ type: "CLOSE_ALL_DROPDOWNS" });
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatchFormData({ type: "SET_FIELD", field: name, value });
  }, []);

  const handleSelectOption = useCallback((option, field) => {
    dispatchFormData({ type: "SET_FIELD", field, value: option });
    dispatchDropdown({ type: "CLOSE_ALL_DROPDOWNS" });
  }, []);

  const handleFileChange = useCallback((e) => {
    dispatchFormData({ type: "SET_LOGO", logo: e.target.files[0] });
  }, []);

  const handleAddSkill = useCallback(
    (e) => {
      e.preventDefault();
      dispatchFormData({ type: "ADD_SKILL", skill: formData.skillInput });
    },
    [formData.skillInput]
  );

  const handleRemoveSkill = useCallback((skill) => {
    dispatchFormData({ type: "REMOVE_SKILL", skill });
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      try {
        const response = await axios.post("/api/jobs", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Form submitted successfully:", response.data);
      } catch (error) {
        console.error("Failed to submit form:", error);
      }
    },
    [formData]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Auto-saving data:", formData);
    }, 120000);
    return () => clearInterval(intervalId);
  }, [formData]);

  return (
    <div>
      <BarAdmin/>
    <div>
      <HeaderPages />

      <div className="container mt-5 ">
        <div className="row ">
          <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
            <div className="top-info text-white mb-0 mb-md-5 ">
              <div className="admin-panel-title">
                Admin Panel
                <div className="lineP "></div>
              </div>
              <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
            </div>
          </div>

          <div className=" col-lg-3 col-md-12 d-none d-md-block">
            <div className="left-content">
              <ul className="sidebar-list pt-2 py-md-3 px-3 ">
                <li className="title">Users</li>
                <ul className="sub-list">
                  <li>Admins</li>
                  <li>Editors</li>
                  <li>Instructors</li>
                  <li>Students</li>
                </ul>
                <li className="title">Articles</li>
                <ul className="sub-list">
                  <li>Published Articles</li>
                  <li>Scheduled Articles</li>
                  <li>Saved Drafts</li>
                </ul>
                <li className="title">Jobs</li>
                <ul className="sub-list">
                  <li>Published Jobs</li>
                  <li>Saved Drafts</li>
                </ul>
                <li className="title">Courses</li>
                <ul className="sub-list">
                  <li>Published Courses</li>
                  <li>Scheduled Courses</li>
                  <li>Saved Drafts</li>
                </ul>
              </ul>
            </div>
          </div>

          <div className=" col-lg-9">
            <div className="px-0 px-md-3 d-flex align-items-center mb-4 me-auto ">
              <div className="col-12 col-md-6 text-md-start ">
                <div className="header-title d-block">
                  Add Job Details
                  <div className="linee d-none d-md-block mx-md-0"></div>
                </div>
              </div>
              <div className=" col-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0">
                <button className="btn btn-gold px-5 d-none d-md-block">
                  Publish
                </button>
              </div>
            </div>
            <form
              className="p-3 rounded shadow custom-form"
              onSubmit={handleSubmit}
            >
              <div className="d-flex flex-column flex-md-row justify-content-between m-0 p-0 gap-3">
                <div className="d-flex flex-column w-100 gap-3">
                  <div className="d-flex flex-column flex-lg-row gap-3 gap-md-2 col-md-12">
                    <div className="form-group w-100">
                      <label htmlFor="companyName" className="text-white">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        className="form-control name-input py-2 "
                        id="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-lg-row gap-3 gap-md-2 col-md-12">
                    <div className="form-groupp col-lg-6">
                      <label htmlFor="field" className="text-white mb-2">
                        Field
                      </label>
                      <div className="dropdown">
                        <button
                          className="btn custom-select dropdown-toggle py-2 w-100 d-flex justify-content-between align-items-center"
                          type="button"
                          id="dropdownFieldButton"
                          onClick={() => toggleDropdown("field")}
                          aria-expanded={dropdownStates.field}
                        >
                          <span
                            className={
                              formData.field
                                ? "normal-text"
                                : "placeholder-text"
                            }
                          >
                            {formData.field || "Select Field"}
                          </span>
                          <i className="fas fa-chevron-down"></i>
                        </button>
                        <ul
                          className={`dropdown-menu w-100 ${
                            dropdownStates.field ? "show" : ""
                          }`}
                          aria-labelledby="dropdownFieldButton"
                        >
                          <li>
                            <button
                              type="button"
                              className="dropdown-item"
                              onClick={() =>
                                handleSelectOption("Field 1", "field")
                              }
                            >
                              Field 1
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="dropdown-item"
                              onClick={() =>
                                handleSelectOption("Field 2", "field")
                              }
                            >
                              Field 2
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <label htmlFor="location" className="text-white">
                        Location
                      </label>
                      <div className="dropdown">
                        <button
                          className="btn custom-select dropdown-toggle w-100 py-2 d-flex justify-content-between align-items-center"
                          type="button"
                          id="dropdownLocationButton"
                          onClick={() => toggleDropdown("location")}
                          aria-expanded={dropdownStates.location}
                        >
                          <span
                            className={
                              formData.location ? "" : "placeholder-text"
                            }
                          >
                            {formData.location || "Select Location"}
                          </span>
                          <i className="fas fa-chevron-down "></i>
                        </button>
                        <ul
                          className={`dropdown-menu w-100 ${
                            dropdownStates.location ? "show" : ""
                          }`}
                          aria-labelledby="dropdownLocationButton"
                        >
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleSelectOption("Location 1", "location")
                              }
                            >
                              Location 1
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleSelectOption("Location 2", "location")
                              }
                            >
                              Location 2
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleSelectOption("Location 3", "location")
                              }
                            >
                              Location 3
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group col-md-5 my-auto my-lg-0">
                  <label htmlFor="companyLogo" className="text-white">
                    Company Logo
                  </label>
                  <div className="rounded d-flex align-items-center justify-content-center custom-logo-upload">
                    <input
                      type="file"
                      name="logo"
                      className="d-none"
                      id="companyLogoInput"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="companyLogoInput"
                      className="text-center mb-0 px-3 w-100 h-100 d-flex flex-column justify-content-center"
                    >
                      <div className="upload-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </div>
                      <div>
                        Drag & drop files or{" "}
                        <span className="text-warning">Browse</span>
                      </div>
                      <small className="form-text text-muted text-center mt-2">
                        Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI,
                        Word, PPT
                      </small>
                    </label>
                  </div>
                </div>
              </div>

              <div className="textArea form-row ">
                <div className="form-group col-md-12  ">
                  <label htmlFor="aboutCompany" className="text-white">
                    About The Company
                  </label>
                  <textarea
                    className="form-control custom-textarea"
                    id="aboutCompany"
                    name="aboutCompany"
                    rows="4"
                    placeholder="Write about the company..."
                    value={formData.aboutCompany}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="form-group col-md-12 mt-3">
                <div className="d-block d-md-flex">
                  <div className="form-group col-12 col-md-3 col-lg-4 me-md-2">
                    <label htmlFor="position" className="text-white">
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      className="form-control py-2 name-input"
                      id="position"
                      placeholder="Enter Position"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-12 col-md-3 col-lg-4 mt-3 mt-md-0">
                    <label htmlFor="jobType" className="text-white">
                      Job Type
                    </label>
                    <div className="dropdown">
                      <button
                        className="btn custom-select dropdown-toggle w-100 py-2 d-flex justify-content-between align-items-center"
                        type="button"
                        id="dropdownJobTypeButton"
                        onClick={() => toggleDropdown("jobType")}
                        aria-expanded={dropdownStates.jobType}
                      >
                        <span
                          className={formData.jobType ? "" : "placeholder-text"}
                        >
                          {formData.jobType || "Select Job Type"}
                        </span>
                        <i className="fas fa-chevron-down me-2"></i>
                      </button>
                      <ul
                        className={`dropdown-menu w-100 ${
                          dropdownStates.jobType ? "show" : ""
                        }`}
                        aria-labelledby="dropdownJobTypeButton"
                      >
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() =>
                              handleSelectOption("Full Time", "jobType")
                            }
                          >
                            Full Time
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() =>
                              handleSelectOption("Part Time", "jobType")
                            }
                          >
                            Part Time
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() =>
                              handleSelectOption("Contract", "jobType")
                            }
                          >
                            Contract
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex checks w-100 justify-content-start mt-4 mt-md-0 align-items-md-end col-12 col-md-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jobTypeRadio"
                        id="remote"
                        value="remote"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="remote"
                      >
                        <i className="far fa-dot-circle" id="remote-icon"></i>{" "}
                        Remote
                      </label>
                    </div>
                    <div className="form-check me-auto">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jobTypeRadio"
                        id="onsite"
                        value="onsite"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="onsite"
                      >
                        <i className="far fa-dot-circle" id="onsite-icon"></i>{" "}
                        On site
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-md-12 mt-3">
                <div className="d-block d-md-flex gap-3">
                  <div className="form-group col-12 col-md-6">
                    <label htmlFor="salaryRangeFrom" className="text-white">
                      Salary Range
                    </label>
                    <div className="d-flex">
                      <input
                        type="text"
                        name="salaryRangeFrom"
                        className="form-control py-2 name-input"
                        id="salaryRangeFrom"
                        placeholder="From"
                        value={formData.salaryRangeFrom}
                        onChange={handleChange}
                      />
                      <span className="text-white my-auto px-2">To</span>
                      <input
                        type="text"
                        name="salaryRangeTo"
                        className="form-control name-input py-2"
                        id="salaryRangeTo"
                        placeholder="To"
                        value={formData.salaryRangeTo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group col-12 col-md-3 mt-3 mt-md-0">
                    <label className="text-white">Currency</label>
                    <div className="dropdown">
                      <button
                        className="btn custom-select dropdown-toggle w-100 py-2 d-flex justify-content-between align-items-center"
                        type="button"
                        id="dropdownCurrencyButton"
                        onClick={() => toggleDropdown("currency")}
                        aria-expanded={dropdownStates.currency}
                      >
                        <span
                          className={
                            formData.currency ? "" : "placeholder-text"
                          }
                        >
                          {formData.currency || "Select Currency"}
                        </span>
                        <i className="fas fa-chevron-down me-2"></i>
                      </button>
                      <ul
                        className={`dropdown-menu w-100 ${
                          dropdownStates.currency ? "show" : ""
                        }`}
                        aria-labelledby="dropdownCurrencyButton"
                      >
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() =>
                              handleSelectOption("USD", "currency")
                            }
                          >
                            USD
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() =>
                              handleSelectOption("EUR", "currency")
                            }
                          >
                            EUR
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() =>
                              handleSelectOption("GBP", "currency")
                            }
                          >
                            GBP
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="textArea form-row mt-3">
                <div className="form-group col-md-12">
                  <label htmlFor="jobDescription" className="text-white">
                    Job Description
                  </label>
                  <textarea
                    className="form-control custom-textarea"
                    id="jobDescription"
                    name="jobDescription"
                    rows="4"
                    placeholder="Write the job description..."
                    value={formData.jobDescription}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="textArea form-row mt-3">
                <div className="form-group col-md-12">
                  <label htmlFor="jobRequirements" className="text-white">
                    Job Requirements
                  </label>
                  <textarea
                    className="form-control custom-textarea"
                    id="jobRequirements"
                    name="jobRequirements"
                    rows="4"
                    placeholder="List the job requirements..."
                    value={formData.jobRequirements}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="form-group col-md-12 mt-3">
                <label htmlFor="skills" className="text-white">
                  Skills
                </label>
                <div className="skills-input">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control custom-textarea py-2"
                      id="skills"
                      name="skillInput"
                      placeholder="Add a skill"
                      value={formData.skillInput}
                      onChange={handleChange}
                    />
                    <button
                      className="btn-gold rounded   px-4 px-md-5 text-white"
                      onClick={handleAddSkill}
                    >
                      Add
                    </button>
                  </div>
                  <div className="skills-list mt-3">
                    {formData.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                        <i
                          className="fas fa-times"
                          onClick={() => handleRemoveSkill(skill)}
                        ></i>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-3 d-block d-md-flex justify-content-end my-3">
                <button
                  type="submit"
                  style={{ fontWeight: "500" }}
                  className="btn mt-2 col-md-2 col-12 btn1 ms-1 text-white py-2 px-2 bg-grey"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  style={{ fontWeight: "500" }}
                  className="btn mt-2 col-md-2 col-12 btn1 ms-1 text-white py-2 px-2"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer/>
    </div>
    </div>
    </div>
  );
};

export default JobForm;
