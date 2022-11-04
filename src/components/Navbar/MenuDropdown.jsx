import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/MenuDropDown.css";

const pages = [
  {
    type: "Home",
    path: "/",
  },
  {
    type: "Courses",
    path: "/courses",
  },
  {
    type: "Favorites",
    path: "/favorites",
  },
  {
    type: "Shop",
    path: "/cart",
  },
];

const MenuDropdown = ({ active, setActive }) => {
  const navigate = useNavigate();

  return (
    <div
      className={active ? "menu-dropdown active" : "menu-dropdown"}
      onClick={() => setActive(false)}
    >
      {pages.map((page) => (
        <div key={page.type} onClick={() => navigate(page.path)}>
          {page.type}
        </div>
      ))}
    </div>
  );
};

export default MenuDropdown;
