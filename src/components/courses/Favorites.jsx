import React, { useContext, useEffect, useState } from "react";
import { favoritesContext } from "../../contesxts/FavoritesContextProvider";
import { shopContext } from "../../contesxts/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
// import EditRoundedIcon from "@mui/icons-material/EditRounded";
// import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

import "../../styles/Favorites.css";

const stars = Array(5).fill(0);

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, getFavorites, deleteFavorites } =
    useContext(favoritesContext);
  const { addCoursesToShop } = useContext(shopContext);
  const [currentValue, setCurrentValue] = useState(0);
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="favorites-list">
      {favorites?.courses.map((elem) => (
        <Card className="card" sx={{ maxWidth: 400 }}>
          <CardMedia
            className="img-course"
            component="img"
            height="120"
            image={elem.item.image}
            alt="poster"
          />
          <div className="rating-stars" style={{ display: "flex" }}>
            {stars.map((_, index) => {
              return (
                <div>
                  <StarIcon
                    key={index}
                    // style={
                    //   currentValue > index
                    //     ? { color: "#FFBA5A" }
                    //     : { color: "#a9a9a9" }
                    // }
                    style={{ color: "#FFBA5A" }}
                    onClick={() => {
                      handleClick(index + 1);
                    }}
                  />
                  {/* <span>{item.rating_count}</span> */}
                </div>
              );
            })}
          </div>
          <div>{elem.item.rating}</div>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h6"
              component="div"
              onClick={() => navigate(`/details/${elem.item.id}`)}
            >
              {elem.item.title}
            </Typography>
            <Typography className="card-price" variant="body2">
              <strong>$ {elem.item.price}</strong>
            </Typography>
            <Typography
              className="card-desc"
              style={{ fontSize: "15px" }}
              variant="body2"
              color="text.secondary"
            >
              {elem.item.description}
            </Typography>
          </CardContent>
          <CardActions className="icons-block">
            <InfoSharpIcon
              className="icon info-icon"
              onClick={() => navigate(`/details/${elem.item.id}`)}
            />
            {/* {currentUser ? (
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
            ) : null} */}
            <ShoppingBagRoundedIcon
              className="icon shop-icon"
              onClick={() => addCoursesToShop(elem.item)}
            />
            <TextsmsIcon className="icon comment-icon" />
            <span
              className="remove-fav"
              onClick={() => deleteFavorites(elem.item.id)}
            >
              <DeleteSharpIcon className="icon delete-icon" />
            </span>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Favorites;
