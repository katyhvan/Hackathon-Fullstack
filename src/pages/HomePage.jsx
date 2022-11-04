import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import online from "../assets/online-learning.png";
import study from "../assets/studying.png";
import ebook from "../assets/ebook.png";

import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* content 1 start */}
      <div className="div-1">
        <div className="div-2">
          <h1 className="h1-1">Online Courses</h1>
          <Paper
            className="input-1"
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            {/* check this */}
            {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </IconButton> */}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search..." }}
            />
          </Paper>
          <p className="par-1">Trending Search: JavaScript, Python, C++, C# </p>
        </div>
        <div>
          <img
            className="big-img"
            src="https://forencisdata.com/assets/img/illustrations/illustration-2.png"
            alt="..."
          />
        </div>
      </div>
      {/* content 1 end */}
      {/* content 2 start */}
      <div className="div-content2-block">
        <h2 className="h2-1">Why Study With Medemy</h2>
        <p className="par-content2-1">
          Discover Your Perfect Program In Our Courses.
        </p>
        <div className="div-content2-1">
          <div className="div-content2">
            <div className="div-content2-img1">
              <img
                className="img-content2-1"
                src={ebook}
                alt="online-learning"
              />
            </div>
            <h4 className="h4-content2">Learn Anything</h4>
            <p className="par-content2-2">
              Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
            </p>
          </div>
          <div className="div-content2">
            <div className="div-content2-img2">
              <img className="img-content2-2" src={online} alt="study" />
            </div>
            <h4 className="h4-content2">Flexible Learning</h4>
            <p className="par-content2-2">
              Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
            </p>
          </div>
          <div className="div-content2">
            <div className="div-content2-img3">
              <img className="img-content2-3" src={study} alt="ebook" />
            </div>
            <h4 className="h4-content2">Learn With Experts</h4>
            <p className="par-content2-2">
              Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
            </p>
          </div>
        </div>
      </div>
      {/* content 2 end */}
    </>
  );
};

export default HomePage;
