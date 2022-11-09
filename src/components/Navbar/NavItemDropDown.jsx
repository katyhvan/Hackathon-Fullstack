import React, { useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { coursesContext } from "../../contesxts/CoursesContextProvider";

function NavItemDropDown() {
  const navigate = useNavigate();
  const { fetchByParams } = useContext(coursesContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div id="fade-button" onClick={handleClick}>
        Courses
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={(e) => {
            navigate("/courses");
            handleClose();
          }}
        >
          All
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            fetchByParams("category", "1");
            handleClose();
          }}
        >
          Python
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            fetchByParams("category", "2");
            handleClose();
          }}
        >
          JavaScript
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            fetchByParams("category", "3");
            handleClose();
          }}
        >
          C++
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            fetchByParams("category", "4");
            handleClose();
          }}
        >
          C#
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            fetchByParams("category", "5");
            handleClose();
          }}
        >
          PHP
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            fetchByParams("category", "6");
            handleClose();
          }}
        >
          JAVA
        </MenuItem>
      </Menu>
    </div>
  );
}
export default NavItemDropDown;
