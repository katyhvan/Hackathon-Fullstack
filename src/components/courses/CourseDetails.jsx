import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import Loader from "../Loader/Loader";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

import { shopContext } from "../../contesxts/ShopContextProvider";
import "../../styles/CourseDetails.css";

const stars = Array(5).fill(0);

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { coursesDetails, getCoursesDetails, getComments } =
    useContext(coursesContext);

  console.log(coursesDetails);

  const { addCoursesToShop } = useContext(shopContext);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    getCoursesDetails(id);
    getComments(id);
  }, []);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <>
      <div>
        {coursesDetails ? (
          <>
            <div className="details-block">
              <img
                className="details-img"
                src={coursesDetails.image}
                alt="poster"
              />
              <div className="details-info">
                <CardContent className="details-body">
                  <Typography
                    className="details-title"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {coursesDetails.title}
                  </Typography>

                  <div className="rating-stars-details">
                    {stars.map((_, index) => {
                      return (
                        <>
                          <StarIcon
                            key={index}
                            style={
                              currentValue > index
                                ? { color: "#FFBA5A" }
                                : { color: "a9a9a9" }
                            }
                            onClick={() => {
                              handleClick(index + 1);
                            }}
                          />
                        </>
                      );
                    })}
                  </div>
                  <Typography className="details-price" variant="body2">
                    <strong>$ {coursesDetails.price}</strong>
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {coursesDetails.date}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {coursesDetails.level}
                  </Typography>
                  <Typography
                    className="details-desc"
                    style={{ fontSize: "15px" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {coursesDetails.description}
                  </Typography>
                </CardContent>
                <CardActions className="icons-block">
                  <InfoSharpIcon
                    className="icon info-icon"
                    onClick={() => navigate(`/courses`)}
                  />
                  <ShoppingBagRoundedIcon
                    className="icon shop-icon"
                    onClick={() => addCoursesToShop(coursesDetails)}
                  />
                  <TextsmsIcon className="icon comment-icon" />
                </CardActions>
                <div className="favorite-details">
                  <FavoriteIcon style={{ color: "#c81919" }} />
                  <p>To Favorite</p>
                </div>
              </div>
            </div>
            
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default CourseDetails;
