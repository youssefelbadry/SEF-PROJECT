import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../image/seff_logo_black.jpg'

const Login = () => {
    const navigate = useNavigate();

    function movetoregister(e) {
      e.preventDefault();
      navigate("/register");
    }
  // State to store form inputs (username and password)
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  // Retrieve saved user and password from localStorage
  const savedUsername = localStorage.getItem('firstName');
  const savedPassword = localStorage.getItem('password');

  // Function to handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (form.username === '' || form.password === '') {
      alert('Please Fill Your Data');
    } else if (
      savedUsername.trim() === form.username.trim() &&
      savedPassword.trim() === form.password.trim()
    ) {
      // Redirect to home page if username and password are correct
      setTimeout(() => {
        navigate('/Articles');
      }, 1500);
    } else {
      alert('Your Name Or Password Is Wrong');
    }
  };

  return (
    <div className='body-register-login'>
    <div className="container form-login">
      <div className="content-form-login">
        <div className="pic-login">
          <img src={logo} alt="Logo" />
        </div>
        <div className="div-form-login">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="input-container input-login">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="username"
                    placeholder="USER ID"
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row pass-login">
              <div className="col-md-12">
                <div className="input-container input-login">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password"
                    placeholder="PASSWORD"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p>Forget Your Password?</p>
            </div>

            <button type="submit" className="mb-2" id="btn-login" style={{ textAlign: 'center' }}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="letter-login">
        <p>Don't Have an Account yet?</p>
        <a onClick={movetoregister} style={{cursor:'pointer'}}>
          <span>Sign up</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Login;
