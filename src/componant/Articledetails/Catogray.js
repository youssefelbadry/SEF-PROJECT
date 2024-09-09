import React, { useState } from 'react';

function CategoryDropdown() {

  const categories = ['Technology', 'Health', 'Finance', 'Education', 'Entertainment'];



  return (
    <div className="mb-3">
      <label htmlFor="categorySelect" className="form-label cap capli">Category</label>
      <select
        id="categorySelect"
        className="form-select  border border-0 bg-gray "
      
      >
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;

