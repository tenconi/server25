import React from 'react';
import './styles.css';
import fb_logo from '../assets/facebook-brands-solid-full.svg';  
import google_logo from '../assets/google-brands-solid-full.svg';  

const Login = () => {
  return (
    <section className="container">
      <h2>Login:</h2>
      <h3>Welcome!!</h3>
      <br />

      <div className='loginDashboard'>
        <div className='loginDash_column'>
          <form action="" className="loginForm">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="fillBtn">
              Login
            </button>
          </form>
          <div>
            <p>
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </div>
        </div>

        <div className='loginDash_column'>
          <div className='loginPill'>
            <img src={fb_logo} className='loginBrand' />
            <p>Sign in with Google</p>
          </div>
          <div className='loginPill'>
            <img src={google_logo} className='loginBrand' />
            <p>Sign in with Facebook</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
