import React from 'react';
import '../CSS/Navbar.css'; // Import CSS for styling
import logo from '../assests/Logo.png';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src={logo} alt="Academia Logo" className="logo" />
      </div>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
