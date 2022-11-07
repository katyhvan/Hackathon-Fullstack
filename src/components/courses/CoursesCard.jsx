import React, { useContext, useState } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contesxts/AuthContextProvider";
import { shopContext } from "../../contesxts/ShopContextProvider";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

import "../../styles/CoursesCard.css";

const stars = Array(5).fill(0);

const CoursesCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteCourses } = useContext(coursesContext);
  const { currentUser } = useAuth();
  const { addCoursesToShop } = useContext(shopContext);
  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleFavorite = () => {};

  return (
    <>
      <Card className="card" sx={{ maxWidth: 400 }}>
        <CardMedia
          className="img-course"
          component="img"
          height="120"
          image={item.image}
          alt="poster"
        />
        <div className="rating-stars">
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
                {/* <span>{item.rating_count}</span> */}
              </>
            );
          })}
        </div>
        <div>{item.rating}</div>
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h6"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography className="card-price" variant="body2">
            <strong>$ {item.price}</strong>
          </Typography>
          <Typography
            className="card-desc"
            style={{ fontSize: "15px" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
          {/* <Typography gutterBottom variant="h6" component="div">
            {item.category}
          </Typography> */}

          <div className="favorite">
            <FavoriteIcon style={{ color: "#c81919" }} />
            <p>To Favorite</p>
          </div>
        </CardContent>
        <CardActions className="icons-block">
          <InfoSharpIcon
            className="icon info-icon"
            onClick={() => navigate(`/details/${item.id}`)}
          />
          {currentUser ? (
            <>
              <EditRoundedIcon
                className="icon edit-icon"
                onClick={() => navigate(`/edit/${item.id}`)}
              />
              <DeleteSweepRoundedIcon
                className="icon delete-icon"
                onClick={() => deleteCourses(item.id)}
              />
            </>
          ) : null}
          <ShoppingBagRoundedIcon
            className="icon shop-icon"
            onClick={() => addCoursesToShop(item)}
          />
          <TextsmsIcon className="icon comment-icon" />
        </CardActions>
      </Card>
    </>
  );
};

export default CoursesCard;
