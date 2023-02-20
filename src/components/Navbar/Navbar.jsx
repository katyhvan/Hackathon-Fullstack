import React, { useState, useEffect } from "react";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contesxts/AuthContextProvider";
import MenuDropdown from "./MenuDropdown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";

import "../../styles/Navbar.css";

const Navbar = () => {
  const { currentUser, checkAuth, handleLogout } = useAuth();
  const [menuActive, setMenuActive] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));

  function logout() {
    const formData = new FormData();
    formData.append("refresh", token.refresh);
    handleLogout(formData, navigate);
  }

  return (
    <>
      <div className="header">
        <div className="navbar-link" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="logo" />
          <h2 className="logo-title">Medemy</h2>
        </div>
        <div
          className={menuActive ? <CloseIcon /> : "burger-menu"}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className="burger-btn"></div>
          <div className="burger-btn"></div>
          <div className="burger-btn"></div>
        </div>
        <nav>
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="navbar-item" onClick={() => navigate("/courses")}>
              Courses
            </li>
            <li className="navbar-item" onClick={() => navigate("/favorites")}>
              Favorites
            </li>
            {currentUser ? (
              <li className="navbar-item" onClick={() => navigate("/admin")}>
                Add course
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="navbar-right">
          <ul className="right-menu">
            <ShoppingBagIcon
              className="right-item icon-bag"
              onClick={() => navigate("/shop")}
            />
            <Avatar
              className="right-item avatar"
              onClick={() => navigate("/login")}
              src={currentUser}
              alt={currentUser}
              style={
                currentUser
                  ? { backgroundColor: "#D87945" }
                  : { backgroundColor: "#b2d8b2" }
              }
            />
            <li
              className="right-item register"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </li>
            <li className="right-item logout" onClick={logout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
      <MenuDropdown active={menuActive} setActive={setMenuActive} />
    </>
  );
};

export default Navbar;
