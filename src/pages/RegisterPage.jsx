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

  function handleSave() {
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    } else if (password.length < 8) {
      alert("Password must contain 8 symbols");
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      register(formData, navigate);
      alert("You registered successfully!");
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="register-inp"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn" onClick={handleSave}>
          Sign Up
        </button>
        <p>
          If you already have one account, please
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
