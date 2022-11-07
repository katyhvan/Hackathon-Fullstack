import React from "react";
import logo from "../../assets/logo1.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="div-footer">
        <div className="div-content4-1">
          {/* <img src={logo} alt="logo" className="img-content4" />
          <h2 className="h2-content4">Medemy</h2> */}
          <div className="div-icon">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <TelegramIcon />
            <LocalPhoneIcon />
          </div>
        </div>
        <div className="div-content4-2">
          <img
            className="img-content4-2"
            src="https://cdn-icons-png.flaticon.com/512/104/104663.png"
            alt=""
          />
          2022 Medemy. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
