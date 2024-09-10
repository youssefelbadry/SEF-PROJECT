import React from 'react'
import logo from '../image/seff_logo_transparent.png'
function Footer() {
  return (
    <footer className="text-white mt-5">
      {/* Top Section */}
      <div className="top-footer d-none d-sm-block">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-12 col-md-8 text-center text-md-start mb-3 mb-md-0">
              <img
                src={logo}
                width="150"
                height="150"
                className="d-inline-block align-top"
                alt="SEF Future logo"
              />
              <h4 className="text-uppercase">Software Engineering For Future</h4>
              <div className="d-flex flex-wrap flex-column pb-2 d-none d-sm-block">
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-start flex-wrap mb-0 mt-2">
                  <li className="me-4">HOME</li>
                  <li className="me-4">ABOUT</li>
                  <li className="me-4">TECH</li>
                  <li className="me-4">BUSINESS</li>
                  <li>SECURITY</li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-start flex-wrap mb-0">
                  <li className="me-4">MEDICAL</li>
                  <li className="me-4">STARTUPS</li>
                  <li className="me-4">APPS</li>
                  <li className="me-4">COURSES</li>
                  <li className="me-4">CONTACT US</li>
                  <li>SPORTS</li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-end mt-auto pb-3">
              <div className="d-flex align-items-center mb-2">
                <p className="mb-0 me-2">sefffuture@gmail.com</p>
                <i className="fas fa-envelope" style={{ color: '#BF9530' }}></i>
              </div>
              <div className="d-flex align-items-center mb-2">
                <p className="mb-0 me-2">+20 109 8481 288</p>
                <i className="fas fa-phone" style={{ color: '#BF9530' }}></i>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-4">+20 155 5177 645</p>
              </div>
            </div>
          </div>
          <div className="custom-line"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-footer py-3">
        <div className="container">
          <div className="row d-none d-sm-flex">
            <div className="col-12 col-md-6 text-center text-md-start my-auto">
              <p className="my-auto">©2023 EGYPT, ALL RIGHTS RESERVED</p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end my-auto mt-3 mt-md-0">
              <div className="social-iconss">
                <a href="#" className="icon-circle text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="icon-circle text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon-circle text-white me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="icon-circle text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Small device */}
        <div className="container">
          <div className="row d-block d-sm-none">
            <div className="col-12 d-flex justify-content-between">
              {/* Left Side Content */}
              <div className="d-flex flex-column">
                <img
                  src="/images/seff_logo_transparent.png"
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                  alt="SEF Future logo"
                />
                <h4 className="text-uppercase fw-bold me-2">Software Engineering For Future</h4>
                <p className="mb-0">sefffuture@gmail.com</p>
                <p className="mb-0">+20 109 8481 288</p>
                <p>+20 155 5177 645</p>
              </div>

              {/* Right Side Icons */}
              <div className="social-iconss d-flex flex-column align-items-end mb-3 mt-auto">
              <a href="#" className="icon-circle text-white mb-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="icon-circle text-white mb-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="icon-circle text-white mb-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                
                <a href="#" className="icon-circle text-white ">
                  <i className="fab fa-twitter"></i>
                </a>
              
              </div>
            </div>

            {/* Custom Line */}
            <div className="col-12">
              <div className="custom-line mb-3"></div>
            </div>

            {/* Footer Text */}
            <div className="col-12 text-center text-md-start my-auto">
              <p className="my-auto">©2023 EGYPT, ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
 
  
  )
}

export default Footer
