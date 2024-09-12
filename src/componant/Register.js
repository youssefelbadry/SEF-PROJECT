import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../image/seff_logo_black.jpg'
const Register = () => {
    const navigate = useNavigate();

    function movetologin(e) {
      e.preventDefault();
      navigate("/login");
    }
  // State to store form inputs
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State for form errors (validation)
  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const haandleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  // Function to handle form submission
  const haandleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password } = form;

    // Check if any field is empty
    if (firstName === '' || email === '' || password === '') {
      alert("Please enter your data");
    } else {
      // Save data to localStorage
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      // Redirect to login page after 1.5 seconds
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <div className='body-register-login'>
    <div className="container form-register">
      <div className="content-form">
        <div className="pic-register">
          <img src={logo}alt="logo" />
          <h5>Create New Account</h5>
        </div>
        <div className="div-form-register">
          <form onSubmit={haandleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-container input-register">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={haandleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container input-register">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={haandleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="input-container input-register">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={haandleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <div className="input-container input-register">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={haandleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container input-register">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={haandleChange}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="mb-2" id="signup" style={{ textAlign: 'center' }}>
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="letter-register">
        <p>Already Have an Account?</p>
        <a onClick={movetologin} style={{cursor:'pointer'}}>
          <span>Login</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Register;
