import React, { useContext } from 'react';
import { FormContext } from './CvFormAutoEdit'; 

export const CVPreview = () => {
  const { formData } = useContext(FormContext); // Get form data from context

  return (
    <div className="container cv-preview p-0 pt-4 ps-4 d-flex">
      <div className="row w-100">
        <div className="col-md-6 left-panel text-white d-flex flex-column align-items-start py-4 px-2">

          <div className="rounded-circle mb-4" style={{ width: '120px', height: '120px', overflow: 'hidden' }}>
            {formData.photo ? (
              <img src={formData.photo} alt="Personal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className="bg-white" style={{ width: '120px', height: '120px' }}></div>
            )}
          </div>

          {/* Display form data dynamically */}
          <h2 className="fs-5 px-2"> {formData.firstName} {formData.lastName}</h2>
          <p className="text-muted px-2"> {formData.profession}</p>

          <ul className="list-group list-group-flush w-100 px-1">
            <li className="list-group-item bg-light text-dark custom-font-size rounded mb-2">
              {formData.city && formData.city}
              {formData.city && formData.country && ', '} 
              {formData.country && formData.country} 
            </li>

            <li className="list-group-item bg-light text-dark rounded mb-2 py-2">{formData.phone}</li>
            <li className="list-group-item bg-light text-dark rounded mb-2 py-2">{formData.email}</li>
          </ul>

          <div className="mt-4 text-start w-100 px-2">
            <div className="section ">
              <h5>Skills</h5>


              <ul className="list-unstyled mb-4">
                {(formData.skills || []).map((skill, index) => (
                  <li key={index} className="d-flex ps-2 align-items-start  text-white">
                    <span className="fw-bold me-2">•</span> 
                    <span className="text-break ">{skill}</span> 
                  </li>
                ))}
              </ul>


            </div>



            <h6 >Honor & Award :</h6>
            <p className="fw-light">{formData.honorAward}</p> 


            <div className="section ">
              <h5>Hobbies & Interest</h5>
              <ul className="list-unstyled mb-4">
                {(formData.hobbies || []).map((hobby, index) => (
                  <li key={index} className="d-flex ps-2 align-items-start text-white">
                    <span className="fw-bold me-2">•</span> 
                    <span className="text-break ">{hobby}</span> 
                  </li>
                ))}
              </ul>
            </div>


          </div>

          <div className="mt-4 w-100 px-2">
            <h5 className="mb-3">Links and Credentials</h5>
            <div className="d-flex flex-wrap gap-3">
              {/* LinkedIn */}
              {formData.linkedIn && (
                <div className="d-flex align-items-center">
                  <i className="fab fa-linkedin text-white me-2"></i>
                  <a href={formData.linkedIn} className="text-white" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              )}

              {/* GitHub */}
              {formData.github && (
                <div className="d-flex align-items-center">
                  <i className="fab fa-github text-white me-2"></i>
                  <a href={formData.github} className="text-white" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              )}

              {/* Website */}
              {formData.website && (
                <div className="d-flex align-items-center">
                  <i className="fas fa-globe text-white me-2"></i>
                  <a href={formData.website} className="text-white" target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 right-panel bg-light p-4">
          <h3 className="customtitleCvPreview mb-4">About</h3>
          {formData.about ? (
            <p className="subtitleCv">
              {formData.about.split('\n').map((str, index) => (
                <React.Fragment key={index}>
                  {str}
                  <br />
                </React.Fragment>
              ))}
            </p>
          ) : (
            <p className="text-muted">No information available.</p>
          )}



          <hr />
          <h3>Education</h3>
          <hr />
          <h3>Experience</h3>
        </div>
      </div>
    </div>
  );
};
