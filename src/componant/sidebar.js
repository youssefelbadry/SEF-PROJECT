import React from 'react'
// const categories = ['Users', 'Articles' , 'Jobs' , 'Courses'];

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="left-content d-none d-md-block">
    <ul className="sidebar-list pt-2 py-md-3 px-3 ">
        <li className='title'>Users</li>
        <ul className="sub-list">
            <li>Admins</li>
            <li>Editors</li>
            <li>Instructors</li>
            <li>Students</li>
        </ul>
        <li className='title titleActive'>Articles</li>
        <ul className="sub-list">
            <li>Published Articles</li>
            <li>Scheduled Articles</li>
            <li>Saved Drafts</li>
        </ul>
        <li className='title'>Jobs</li>
        <ul className="sub-list">
            <li>Published Jobs</li>
            <li>Saved Drafts</li>
        </ul>
        <li className='title'>Courses</li>
        <ul className="sub-list">
            <li>Published Courses</li>
            <li>Scheduled Courses</li>
            <li>Saved Drafts</li>
        </ul>
    </ul>
</div>
{/* <div className="d-block d-md-none mb-3">
  <select
    id="categorySelect"
    className="form-select border border-0 bg-red text-center"
    style={{ fontSize: '1.2rem' }} // Adjust the font size as needed
  >
    {categories.map((category, index) => (
      <option key={index} className="text-center">
        {category}
      </option>
    ))}
  </select>
</div> */}


</div>
  )
}

export default Sidebar
