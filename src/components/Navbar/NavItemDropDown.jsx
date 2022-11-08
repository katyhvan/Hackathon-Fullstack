import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavItemDropDown() {
  const navigate = useNavigate();
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
          onClick={() => {
            navigate("/courses");
            handleClose();
          }}
        >
          All
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            navigate("/js");
            handleClose();
          }}
        >
          JavaScript
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            navigate("/python");
            handleClose();
          }}
        >
          Python
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            navigate("/php");
            handleClose();
          }}
        >
          PHP
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            navigate("/c+");
            handleClose();
          }}
        >
          C++
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            navigate("/c+");
            handleClose();
          }}
        >
          C#
        </MenuItem>
      </Menu>
    </div>
  );
}
export default NavItemDropDown;
