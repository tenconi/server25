import React from 'react';
import { Link } from 'react-router-dom';
import LineButton_dark from '../TestButtons/LineButton_dark.jsx';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h1 className='navLogo'>Brand ON</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About us!</Link>
        </li>
      </ul>

      
        <div className='navAcces'>
            <LineButton_dark legend='Login' url={'/login'}/>
            <LineButton_dark legend='Register' url={'/register'}/>
        </div>
    </nav>
  );
};

export default NavBar;
