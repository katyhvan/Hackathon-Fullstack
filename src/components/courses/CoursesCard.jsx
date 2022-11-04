import React, { useContext } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";

import "../../styles/CoursesCard.css";

const CoursesCard = ({ item }) => {
  const { deleteCourses } = useContext(coursesContext);
  alert(item);
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
          <Typography
            style={{ fontSize: "15px" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {}
          </Typography>
          <Typography variant="body2">${item.price}</Typography>
        </CardContent>
        <CardActions>
          <InfoSharpIcon />
          <Button
            color="primary"
            variant="contained"
            onClick={() => deleteCourses(item.id.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CoursesCard;
