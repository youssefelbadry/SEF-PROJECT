import React from 'react';
import ProgressCircle from './ProgressCircle';

function CourseCard({ course }) {
  return (
    <div className="col-12 col-md-3 mb-4 ">
      <div className="card col-12 d-flex flex-row flex-md-column h-100 text-white" style={{ backgroundColor: 'rgba(0,0,0,.753)' }}>
        <div className="col-4 col-md-12 card-body my-0 mx-0 p-4 text-start text-md-center">
          <ProgressCircle radius={50} stroke={5} progress={parseInt(course.progress, 10)} />
        </div>
        <div className="col-10 col-md-12 card-body p-2 my-0 mx-0 text-start text-md-center">
          <h5 className="card-title">{course.title}</h5>
          <h3 className='p-2'>LEV. {course.level}</h3>
          <h4 className='p-2'>{course.hours}</h4>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;