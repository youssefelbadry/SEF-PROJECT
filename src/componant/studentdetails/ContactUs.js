import React from 'react';

import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
// ContactUs Component
const ContactUs = () => {
  return (
   

      <div >
      <HeaderPages/>

        <div className="container all-section">
          <div className="date-header" style={{ marginTop: '100px' }}>
            <h6 style={{ color: 'white' }}>Contact Us</h6>
            <hr style={{ width: '70px', height: '2px', backgroundColor: '#fdd55b' }} />
            <h6 style={{ color: 'white' }}>6th June 2023</h6>
          </div>

          <div className="container mt-4">
            <div className="row">
              <div className="left-div col-md-6">
                <div className="lett">
                  <h5>Visit US</h5>
                  <p>here is the address of the organization</p>
                </div>

                <div className="lett">
                  <h5>Leave us an email</h5>
                  <p>mailto:sufffuture@gmail.com</p>
                </div>

                <div className="lett">
                  <h5>Follow us on social media</h5>

                  <ul className="d-flex flex-md-row justify-content-center align-items-center p-0" style={{ listStyle: 'none' }}>
                    <li className="mb-2 mb-md-0">
                      <i className="fab fa-facebook"></i>
                    </li>
                    <li className="mb-2 mb-md-0">
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li className="mb-2 mb-md-0">
                      <i className="fab fa-instagram"></i>
                    </li>
                    <li className="mb-2 mb-md-0">
                      <i className="fab fa-linkedin"></i>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Div */}
              <div className="form col-md-6">
                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                  <div className="card-body">
                    {/* Header */}
                    <div className="from-head">
                      <h5 className="white-text">GET IN TOUCH</h5>
                      <p>We'd Love to hear from you</p>
                    </div>

                    <div className="row g-3">
                      <div className="col-sm-12 col-lg-6">
                        <p>First name</p>
                        <input type="text" className="form-control" aria-label="First name" />
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <p>Last name</p>
                        <input type="text" className="form-control" aria-label="Last name" />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-lg-6">
                        <p>Email</p>
                        <input type="text" className="form-control" aria-label="Email" />
                      </div>
                      <div className="col">
                        <p>Phone Number</p>
                        <input type="text" className="form-control" aria-label="Phone Number" />
                      </div>
                    </div>
                    <div className="md-form p-2">
                      <p>Message</p>
                      <input type="text" className="form-control" style={{ height: '80px' }} />
                    </div>
                    <div className="form-button mt-4">
                      <button className="button-form">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default ContactUs;
