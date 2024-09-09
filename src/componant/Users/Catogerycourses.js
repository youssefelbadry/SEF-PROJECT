import React, { useState } from 'react';

function Catogerycourses() {

  const categories = ['front', 'back'];



  return (
    <div className="mb-3 text-light">
      <label htmlFor="categorySelect" className="form-label cap capli mt-3">Courses</label>
      <select
        id="categorySelect"
        className="form-select border-0 bg-gray text-light"
      
      >
        {categories.map((category, index) => (
          <option key={index} style={{backgroundColor:'rgba(0,0,0,0.5)', color:"black"}}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Catogerycourses;