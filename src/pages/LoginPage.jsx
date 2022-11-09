import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contesxts/AuthContextProvider";
import Loader from "../components/Loader/Loader";
import logo from "../assets/logo1.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import "../styles/Register.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginPage = () => {
  const navigate = useNavigate();

  const { error, setError, loading, login, getMail } = useAuth();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  function handleMail() {
    if (!email.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      getMail(formData, navigate);
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
        <Button onClick={handleOpen}>Forgot Password</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please enter your E-Mail
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
            <TextField
              className="email-inp"
              required
              id="outlined-required"
              label="Required"
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="send-btn" onClick={handleMail}>
              Send
            </button>
          </Box>
        </Modal>
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
