import React, { useState } from "react";
import { useAuth } from "../contesxts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

import "../styles/Register.css";

const RestorePage = () => {
  const { passRecovery } = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handlePass() {
    if (!code.trim() || !password.trim() || !password2.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let formData = new FormData();
    formData.append("code", code);
    formData.append("password", password);
    formData.append("password2", password2);
    passRecovery(formData, navigate);
    alert("Your password has been recovered!");

    setCode("");
    setPassword("");
    setPassword2("");
  }

  return (
    <>
      <div className="restore-form">
        <p>Check you E-Mail for code</p>
        <input
          type="text"
          className="restore-inp"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="password"
          className="restore-inp"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="restore-inp"
          placeholder="Password Confirmation"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button className="restore-btn" onClick={handlePass}>
          Send
        </button>
      </div>
    </>
  );
};

export default RestorePage;
