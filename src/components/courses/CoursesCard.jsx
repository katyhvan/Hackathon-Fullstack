import React, { useContext, useEffect } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contesxts/AuthContextProvider";

import "../../styles/CoursesCard.css";

const CoursesCard = ({ item }) => {
  const { deleteCourses } = useContext(coursesContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

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
        <CardActions>
          <InfoSharpIcon onClick={() => navigate(`/details/${item.id}`)} />
          {currentUser ? (
            <>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate(`/edit/${item.id}`)}
              >
                Edit
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => deleteCourses(item.id)}
              >
                Delete
              </Button>
            </>
          ) : null}
        </CardActions>
      </Card>
    </>
  );
};

export default CoursesCard;
