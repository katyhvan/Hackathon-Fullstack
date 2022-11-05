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
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
// import Like from "../../components/Like/Like";
import StarIcon from "@mui/icons-material/Star";
import "../../styles/CoursesCard.css";

const stars = Array(5).fill(0);

const CoursesCard = ({ item }) => {
  const { deleteCourses } = useContext(coursesContext);
  const { currentUser } = useAuth();
  const { addCoursesToShop } = useContext(shopContext);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const navigate = useNavigate();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  return (
    <>
      <Card className="card" sx={{ maxWidth: 450 }}>
        <CardMedia
          className="img-course"
          component="img"
          height="140"
          image={item.image}
          alt="poster"
        />
        {/* <Like /> */}
        <div className="rating-stars">
          {stars.map((_, index) => {
            return (
              <StarIcon
                key={index}
                style={
                  hoverValue || currentValue > index
                    ? { color: "#FFBA5A" }
                    : { color: "a9a9a9" }
                }
                onClick={() => handleClick(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {item.category}
          </Typography>
          <Typography
            style={{ fontSize: "15px" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
          <Typography variant="body2">${item.price}</Typography>
        </CardContent>
        <CardActions className="icons-block">
          <InfoSharpIcon
            className="icon"
            onClick={() => navigate(`/details/${item.id}`)}
          />
          <ChatBubbleOutlineRoundedIcon />
          {currentUser ? (
            <>
              <EditRoundedIcon
                className="icon"
                onClick={() => navigate(`/edit/${item.id}`)}
              />
              <DeleteSweepRoundedIcon
                className="icon"
                onClick={() => deleteCourses(item.id)}
              />
            </>
          ) : null}
          <ShoppingBagRoundedIcon
            className="icon"
            onClick={() => addCoursesToShop(item)}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default CoursesCard;
