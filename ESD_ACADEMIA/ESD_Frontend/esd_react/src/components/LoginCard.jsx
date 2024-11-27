import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LoginCard.css"; // Importing the CSS file

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/timetable");
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Faculty Login</h3>
          
          <div className="mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
