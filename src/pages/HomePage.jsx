import React, { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import Footer from "../components/Footer/Footer";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import online from "../assets/online-learning.png";
import study from "../assets/studying.png";
import ebook from "../assets/ebook.png";

import "../styles/HomePage.css";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useNavigate } from "react-router-dom";

import mentor1 from "../assets/img/mentor1.jpg";
import mentor2 from "../assets/img/mentor2.jpg";
import mentor3 from "../assets/img/mentor3.jpg";
import mentor4 from "../assets/img/mentor4.jpg";
import mentor5 from "../assets/img/mentor5.jpg";
import mentor7 from "../assets/img/mentor7.jpg";
import mentor8 from "../assets/img/mentor8.jpg";
import mentor9 from "../assets/img/mentor9.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Алексей Назаренко",
    imgPath: mentor5,
  },
  {
    label: "Айтегин Жаныбаев",
    imgPath: mentor1,
  },
  {
    label: "Эмир Акимжанов",
    imgPath: mentor9,
  },
  {
    label: "Полина Черноусова",
    imgPath: mentor4,
  },
  {
    label: "Аббас Жунушов",
    imgPath: mentor3,
  },
  {
    label: "Саламат Кадыров",
    imgPath: mentor2,
  },

  {
    label: "Санжар Шадыбеков",
    imgPath: mentor7,
  },
  {
    label: "Анастасия Тузикова",
    imgPath: mentor8,
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => navigate("/courses")}
              >
                <SearchIcon />
              </IconButton>
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search..." }}
            />
          </Paper>
          {/* <button
            type="text"
            onClick={() => navigate(`/courses/${window.location.search}`)}
          >
            Search
          </button> */}
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
        <h3 className="h3-content3">Our Mentors</h3>
        <p className="par-content3">
          Discover the perfect program in our courses with our team.
        </p>
        <div className="div-content3">
          <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((image, index) => (
                <div key={image.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        maxHeight: 780,
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      src={image.imgPath}
                      alt={image.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </div>
      {/* content 2 end */}

      {/* content 3 start */}
      <div className="div-content3-block">
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

      {/* content 3 end */}

      {/* content 4 start  */}
      <div className="div-content4-block"></div>
      <Footer />
      {/* content 4 end  */}
    </>
  );
};

export default HomePage;
