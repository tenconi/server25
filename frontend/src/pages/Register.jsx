import React from 'react';
import './styles.css';
import fb_logo from '../assets/facebook-brands-solid-full.svg';
import google_logo from '../assets/google-brands-solid-full.svg';

import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [repeatPassword, setRepeatPassword] = useState('');
  // const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validación en frontend
    if (form.password !== form.repeatPassword) {
      setMessage('❌ Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3030/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setMessage('✅ Registration successful!' + res.data.message);
      setForm({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌' + (err.response?.data?.message || 'Error en registro'));
    }
  };

  return (
    <section className="container">
      <h2>Register:</h2>
      <br />
      <div className="registerDashBoard">
        <div className="regDash_column">

          <form onSubmit={handleSubmit} className="registerForm">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              // onChange={(e) => setName(e.target.value)}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              value={form.password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleChange}
            />
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              required
              value={form.repeatPassword}
              // onChange={(e) => setRepeatPassword(e.target.value)}
              onChange={handleChange}
            />

            <button type="submit" className="fillBtn">
              Register
            </button>
          </form>
          {message && <p className="message">{message}</p>}
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
