import { useState } from "react";
import { loginUser } from "../model/authModel";
import { saveTokenToLocalStorage } from "../util/localStorageUtil";

function useLogin(onLoginSuccess, navigate) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const token = await loginUser(email, password);
      if (!token) {
        setError("Login failed. Please try again.");
        return;
      }

      saveTokenToLocalStorage(token); // Store token in local storage
      onLoginSuccess(token);
      navigate("/timetable");
    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
}

export default useLogin;