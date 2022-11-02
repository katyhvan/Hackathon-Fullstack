import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contesxts/AuthContextProvider";
import Loader from "../components/Loader/Loader";
import logo from "../assets/logo1.png";

import "../styles/Register.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const { error, setError, loading, login } = useAuth();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!username.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      login(formData, username, navigate);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="login-form">
        <img
          src={logo}
          alt="logo"
          width="80px"
          height="60px"
          className="img-logo"
        />
        <p>
          Please login in your <strong>Medemy account</strong>
        </p>
        {error ? <h3>{error}</h3> : null}
        <input
          type="text"
          className="login-inp"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          className="login-inp"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn login" onClick={handleLogin}>
          Login
        </button>
        <p>
          If you don't have an account, please
          <span className="login-link" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
