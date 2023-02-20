import React, { useEffect, useState } from "react";
import { useAuth } from "../contesxts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import logo from "../assets/logo1.png";

import "../styles/Register.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { error, setError, loading, register } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleSave() {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password2.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    } else if (password.length < 8 || password2.length < 8) {
      alert("Password must contain 8 symbols");
      return;
    } else if (password !== password2) {
      alert("Password and password confirmation don't match!");
      return;
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password2", password2);
      register(formData, navigate);

      setUsername("");
      setEmail("");
      setPassword("");
      setPassword2("");
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
      <div className="register-form">
        <img
          src={logo}
          alt="logo"
          width="80px"
          height="60px"
          className="img-logo"
        />
        <p>Sign up and start to study</p>
        {error ? <h3>{error}</h3> : null}
        <input
          type="text"
          className="register-inp"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="register-inp"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="register-inp"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="register-inp"
          placeholder="Password Confirmation"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button className="register-btn" onClick={handleSave}>
          Sign Up
        </button>
        <p>
          Already have an account
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
