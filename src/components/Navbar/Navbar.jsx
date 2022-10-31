import React from "react";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import NavItemDropDown from "./NavItemDropDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Avatar from "@mui/material/Avatar";

import "../../styles/Navbar.css";

const pages = [
  {
    type: <ShoppingBagIcon />,
    path: "/cart",
  },
  {
    type: <Avatar />,
    path: "/login",
  },
  {
    type: "Sign Up",
    path: "/register",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="navbar-link">
        <img src={logo} alt="logo image" className="logo" />
        <h2 className="logo-title">Medemy</h2>
      </div>
      <nav>
        <ul className="navbar-menu">
          <li className="navbar-item" onClick={() => navigate("/")}>
            About us
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
          {pages.map((page) => (
            <li key={page.type} onClick={() => navigate(page.path)}>
              {page.type}
            </li>
          ))}
          {/* <li>Logout</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
