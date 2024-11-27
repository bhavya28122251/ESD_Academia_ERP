import React,{useEffect} from "react";
import LoginCard from "../components/LoginCard.jsx"; // Importing the Login Card component
import "../CSS/Login.css"; // Importing the CSS file
import logo from '../images/Logo.png'
import { useNavigate } from "react-router-dom";
import useLogin from "../hook/useLogin";
import { getTokenFromLocalStorage } from "../util/localStorageUtil";
import handleLogin from '../hook/useLogin.js';


function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, error, handleLogin } = useLogin(onLoginSuccess, navigate);

  // useEffect(() => {
  //   const token = getTokenFromLocalStorage();
  //   if (token) {
  //     navigate("/timetable");
  //   }
  // }, [navigate]);

  return (
    <div className="login-page">
      <div className="left-side">
        <img src={logo} alt="Academia Logo" className="side-image" />
      </div>
      <div className="right-side">
        
        <LoginCard 
         email={email}
         password={password}
         setEmail={setEmail}
         setPassword={setPassword}
         error={error}
         handleSubmit={handleLogin}/>
      </div>
    </div>
  );
}

export default Login;
