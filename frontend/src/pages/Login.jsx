import React from 'react';
import './styles.css';
import fb_logo from '../assets/facebook-brands-solid-full.svg';
import google_logo from '../assets/google-brands-solid-full.svg';

import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3030/auth/login', {
        email,
        password,
      });
      // save Token
      localStorage.setItem('token', res.data.token);
      setMessage('✅ Login successful!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Error en login');
    }
  };

  return (
    <section className="container">
      <h2>Login:</h2>
      <h3>Welcome to Brand ON!!</h3>
      <br />

      <div className="loginDashboard">
        <div className="loginDash_column">
          <form action="" className="loginForm" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="fillBtn">
              Login
            </button>
          </form>
          <div>
            <p>
              Don't have an account? <a href="/register">Register here</a>
            </p>
            <p>
              I forgot my password? <a href="/register">Click here</a>
            </p>
          </div>
        </div>

        <div className="loginDash_column">
          <div className="loginPill">
            <img src={fb_logo} className="loginBrand" />
            <p>Sign in with Google</p>
          </div>
          <div className="loginPill">
            <img src={google_logo} className="loginBrand" />
            <p>Sign in with Facebook</p>
          </div>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </section>
  );
};

export default Login;
