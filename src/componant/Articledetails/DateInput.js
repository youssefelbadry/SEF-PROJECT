import React , {useState}from 'react';

function DateInput() {

  return (
    <div className="mb-3">
      <label htmlFor="dateInput" className="form-label  cap capli">Select Date</label>
      <div className="input-group bg-gray w-50  ">
        <span className="">
          <i className="fas fa-calendar-alt p-3 pe-0"></i>
        </span>
        <input
          type="date"
          className="form-control border border-0 bg-gray "
          id="dateInput"
          name="date"
          style={{
            backgroundColor: 'transparent' ,
            transition: 'background-color 0.3s ease',}}
        />
      </div>
    </div>
  );
}

export default DateInput;
