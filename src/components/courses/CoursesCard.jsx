import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contesxts/AuthContextProvider";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import { shopContext } from "../../contesxts/ShopContextProvider";
import { favoritesContext } from "../../contesxts/FavoritesContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import "../../styles/CoursesCard.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const stars = Array(5).fill(0);

const CoursesCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteCourses, addCommentsToCourse } = useContext(coursesContext);
  const { currentUser } = useAuth();
  const { addCoursesToShop } = useContext(shopContext);
  const { addCourseToFavorites } = useContext(favoritesContext);

  const [currentValue, setCurrentValue] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  function handleComment() {
    if (!comment.trim()) {
      alert("Please tipps some text!");
      return;
    }

    let newComment = new FormData();
    newComment.append("comment", comment);
    addCommentsToCourse(newComment);
    alert("Successfully added comments!");
  }

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
            onClick={() => navigate(`/details/${item.id}`)}
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                className="comment-inp"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="send-btn"
                onClick={() => {
                  handleComment();
                  handleClose();
                }}
              >
                Send
              </button>
            </Box>
          </Modal>
          <div className="favorite" onClick={() => addCourseToFavorites(item)}>
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
          <TextsmsIcon className="icon comment-icon" onClick={handleOpen} />
        </CardActions>
      </Card>
    </>
  );
};

export default CoursesCard;
