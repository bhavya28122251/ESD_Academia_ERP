import React from "react";
import LoginCard from "../components/LoginCard.jsx"; // Importing the Login Card component
import "../CSS/Login.css"; // Importing the CSS file
import logo from '../images/Logo.png'

function LoginPage() {
  return (
    <div className="login-page">
      <div className="left-side">
        <img src={logo} alt="Academia Logo" className="side-image" />
      </div>
      <div className="right-side">
        
        <LoginCard />
      </div>
    </div>
  );
}

export default LoginPage;
