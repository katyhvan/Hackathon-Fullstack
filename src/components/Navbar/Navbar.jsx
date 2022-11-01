import React, { useState } from "react";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import NavItemDropDown from "./NavItemDropDown";
import MenuDropdown from "./MenuDropdown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Avatar from "@mui/material/Avatar";
import { Logout } from "@mui/icons-material";

import "../../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState();

  return (
    <>
      <div className="header">
        <div className="navbar-link">
          <img src={logo} alt="logo" className="logo" />
          <h2 className="logo-title">Medemy</h2>
        </div>
        <div className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
          <div className="burger-btn"></div>
          <div className="burger-btn"></div>
          <div className="burger-btn"></div>
        </div>
        <nav>
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="navbar-item">
              <NavItemDropDown />
            </li>
            <li className="navbar-item" onClick={() => navigate("/favorites")}>
              Favorites
            </li>
          </ul>
        </nav>
        <div className="navbar-right">
          <ul className="right-menu">
            <ShoppingBagIcon
              className="right-item"
              onClick={() => navigate("/cart")}
            />
            <Avatar
              className="right-item avatar"
              onClick={() => navigate("/login")}
            />
            <li
              className="right-item register"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </li>
            <li className="right-item logout">Logout</li>
            <Logout className="logout-icon" />
          </ul>
        </div>
      </div>
      <MenuDropdown active={menuActive} setActive={setMenuActive} />
    </>
  );
};

export default Navbar;
