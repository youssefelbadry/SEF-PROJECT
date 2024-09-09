import React from "react";
import logo from "../image/seff_logo_transparent.png";

function HeaderPages() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-custom navvv">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src={logo}
              title="logo"
              height="100px"
              width="100px"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
          >
            <span className="navbar-toggler-icon" id="icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 linkss">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TECH
                </a>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#business">
                  BUSINESS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#security">
                  SECURITY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sports">
                  SPORTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#medical">
                  MEDICAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#startups">
                  STARTUPS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#apps">
                  APPS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  COURSES
                </a>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                 
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jobs">
                  JOBS
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  style={{ backgroundColor: "#BF9B30", border: "0" }}
                >
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderPages;
