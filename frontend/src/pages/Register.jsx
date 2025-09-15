import React from 'react';
import './styles.css';
import fb_logo from '../assets/facebook-brands-solid-full.svg';
import google_logo from '../assets/google-brands-solid-full.svg';

const Register = () => {
  return (
    <section className="container">
      <h2>Register:</h2>
      <br />
      <div className="registerDashBoard">
        <div className="regDash_column">
          <form action="post" className="registerForm">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Your Password" required />
            <input type="password" placeholder="Repeat Password" required />
            <button type="submit" className="fillBtn">
              Register
            </button>
          </form>
        </div>

        <div className="regDash_column">
          <h3>Or you can be registered with:</h3>
          <div className="loginPill">
            <img src={fb_logo} className="loginBrand" />
            <p>Register with Google</p>
          </div>
          <div className="loginPill">
            <img src={google_logo} className="loginBrand" />
            <p>Register with Facebook</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
