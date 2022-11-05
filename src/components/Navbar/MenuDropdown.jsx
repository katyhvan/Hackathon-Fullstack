import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MenuDropDown.css";
import CloseIcon from "@mui/icons-material/Close";

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
    path: "/shop",
  },
];

const MenuDropdown = ({ active, setActive }) => {
  const navigate = useNavigate();

  return (
    <div className="menu-block">
      <div
        className={active ? "menu-dropdown active" : "menu-dropdown"}
        onClick={() => setActive(false)}
      >
        <CloseIcon className="close-icon" />
        {pages.map((page) => (
          <div key={page.type} onClick={() => navigate(page.path)}>
            {page.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
