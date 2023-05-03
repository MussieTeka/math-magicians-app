import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <NavLink to="/">
        <h1>Math Magicians</h1>
      </NavLink>
    </div>
    <ul className="navbar-right">
      <li>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator" activeclassname="active">
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quote" activeclassname="active">
          Quotes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
