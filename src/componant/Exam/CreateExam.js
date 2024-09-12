import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // تأكد من تثبيت react-icons
import { CiCircleRemove } from 'react-icons/ci'; // تأكد من تثبيت react-icons
import { FaCalendar, FaClock, FaHourglass, FaCloudUploadAlt, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import Footer from '../Footer';
import HeaderPages from '../HeaderPages';
import BarStudent from '../BarStudent';
import BarInstructor from '../BarInstructor';

function CreateExam() {
    
  return (
    <div>
        <BarInstructor/>
    <div className='text-white'>
    <HeaderPages/>
    <div className="container">
      <h3 className="all-tit">Question</h3>
      <div className="all-qu1">
        <div className="">
          <div className="col-lg-12 anew-sec">
            <div className="nd-sec">
              <div className="row g-3 inside">
                <div className="col-md-8">
                  <label htmlFor="inputState" className="form-label">Questoin 1</label>
                  <input type="text" className="form-control" aria-label="State" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Mark</label>
                  <input type="text" className="form-control" aria-label="Zip" />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">Question Type</label>
                  <select id="inputState" className="form-select">
                    <option selected>Multiple Choice</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="durationInput" className="form-label">Image Upload</label>
                  <div className="inpoot regular">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <input type="text" id="durationInput" className="form-control" aria-label="Duration" />
                  </div>
                </div>

                <div>
                  <label htmlFor="inputState" className="form-label">Option</label>
                  <form className="form1 col-lg-8 plus">
                    <input type="text" className="input form-control" />
                    <button className="btn-correct" style={{ backgroundColor: '#069206' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#06cb06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9 12l2 2 4-4"></path>
                      </svg>
                      Correct answer
                    </button>
                  </form>
                  <div className="icon-exam">
                    <i className="fas fa-trash-alt"></i>
                  </div>
                </div>

                <div>
                  <label htmlFor="inputState" className="form-label">Option</label>
                  <form className="form1 col-lg-8 plus">
                    <input type="text" className="input-correct form-control" />
                    <button className="btn-correct" style={{ backgroundColor: 'rgb(160, 24, 24)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                      Correct answer
                    </button>
                  </form>
                  <div className="icon-exam">
                    <i className="fas fa-trash-alt"></i>
                    <i className="fas fa-plus-circle"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-qu1">
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>

    <div className="container">
      <h3 className="all-tit">Question</h3>
      <div className="all-qu1">
        <div className="">
          <div className="col-lg-12 anew-sec">
            <div className="nd-sec">
              <div className="row g-3 inside">
                <div className="col-md-8">
                  <label htmlFor="inputState" className="form-label">Questoin 1</label>
                  <input type="text" className="form-control" aria-label="State" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Mark</label>
                  <input type="text" className="form-control" aria-label="Zip" />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">Question Type</label>
                  <select id="inputState" className="form-select">
                    <option selected>Multiple Choice</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="durationInput" className="form-label">Image Upload</label>
                  <div className="inpoot regular">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <input type="text" id="durationInput" className="form-control" aria-label="Duration" />
                  </div>
                </div>

                <div className="form1 opttion end-exam">
                  <div className="col-md-12 plus">
                    <label htmlFor="inputState" className="form-label">Answer</label>
                    <input type="text" className="form-control" id="inputState" />
                    <button className="btn-correct1 c1" style={{ backgroundColor: '#069206' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#06cb06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9 12l2 2 4-4"></path>
                      </svg>
                      Correct answer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-qu1">
          <span>Add Question </span>
          <i className="fas fa-trash-alt d-inline"></i>
        </div>
      </div>
    </div>

    <div className="mt-3 footer-btn">
      <button className="btn col-sm-7" style={{ backgroundColor: '#bf9b30', color: 'white' }}>
        Publish
      </button>
      <button className="btn col-sm-7" style={{ backgroundColor: 'gray' }}>
        Cancel
      </button>
    </div>
  </div>
  <Footer/>
  </div>
  )
}

export default CreateExam