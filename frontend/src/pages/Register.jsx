import React from 'react';
import './styles.css';
import fb_logo from '../assets/facebook-brands-solid-full.svg';
import google_logo from '../assets/google-brands-solid-full.svg';

import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setMessage('❌ Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3030/auth/register', {
        name,
        email,
        password,
      });
      setMessage('✅ Registration successful!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Error en registro');
    }
  };

  return (
    <section className="container">
      <h2>Register:</h2>
      <br />
      <div className="registerDashBoard">
        <div className="regDash_column">
          <form action="post" className="registerForm">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Repeat Password"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

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
