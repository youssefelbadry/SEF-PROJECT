import React from 'react'

function Coursesinstructor({ imgSrc, title, date, lessons }) {
  return (
    <div className='container'>
    <div className='row'>
    <div className="card mb-3 col-12 col-md-10 mt-4" >
    <div className="row g-0">
    <div className="col-12 col-md-4 image-overlay-containerINSTRUCTOR">
  <img src={imgSrc} className="img-fluid rounded-start" alt="course" />
  <div className="image-overlayINSTRUCTOR justify-content-start align-items-end">
  <h5 className="d-none d-md-block px-2">LEV.1</h5>
  </div>
</div>

      <div className="col-md-8 " style={{backgroundColor:'black' , color:'white'}}>
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">   
                  <div className="d-flex">
                  <i className="fas fa-calendar-alt me-2" style={{color:'yellow' , fontSize:'1.52rem'}}></i>
                                <div>
                                    <h6 className="fw-bold">{date}</h6>
                                </div>             </div> </p>
    <div className="d-flex  align-items-center">
        {/* SVG Icon */}
        <div className="d-flex align-items-center">
            <svg  xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#BF9530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="19" rx="2" ry="2" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="16" y2="14" />
                <line x1="9" y1="18" x2="14" y2="18" />
            </svg>
            {/* Lesson count */}
           
        </div>
        <div>
                <h6 className="fw-bold">Lessons: {lessons}</h6>
            </div>
        {/* Button */}
     
    </div>
    <div className='row'>
      <div className="col-6 d-block d-md-none mt-2">
       <h5> Lev.1</h5>
    </div>
    <div className="d-flex justify-content-end col-6 col-md-12">
    <button className="btn btn-warning  d-flex justify-content-center align-items-center">
        View details
    </button>
</div>
       
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Coursesinstructor
