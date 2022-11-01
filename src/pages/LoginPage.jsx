import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contesxts/AuthContextProvider";
import Loader from "../components/Loader/Loader";
import logo from "../assets/logo1.png";

import "../styles/Register.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const { error, setError, loading } = useAuth();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="register-form">
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
          className="register-inp"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          className="register-inp"
          placeholder="E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="register-inp"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn login">Login</button>
        <p>
          If you don't have account, please
          <span className="login-link" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
