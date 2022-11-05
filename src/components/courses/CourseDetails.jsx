import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import CoursesCard from "./CoursesCard";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";

const CourseDetails = () => {
  const { id } = useParams();
  const { coursesDetails, getCoursesDetails, deleteCourses } =
    useContext(coursesContext);

  const navigate = useNavigate();

  useEffect(() => {
    getCoursesDetails(id);
  }, []);

  return (
    <>
      <div>
        {coursesDetails ? (
          <>
            <Card className="card" sx={{ maxWidth: 450 }}>
              <CardMedia
                className="img-course"
                component="img"
                height="140"
                image={coursesDetails.image}
                alt="poster"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {coursesDetails.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {coursesDetails.date}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {coursesDetails.level}
                </Typography>
                <Typography
                  style={{ fontSize: "15px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {coursesDetails.description}
                </Typography>
                <Typography variant="body2">${coursesDetails.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => navigate(`/edit/${coursesDetails.id}`)}
                >
                  Edit
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => deleteCourses(coursesDetails.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};

export default CourseDetails;
