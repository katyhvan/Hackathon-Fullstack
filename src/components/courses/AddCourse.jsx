import { Category } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { coursesContext } from "../../contesxts/CoursesContextProvider";

const AddCourse = () => {
  const navigate = useNavigate();

  const { courses, addCourse } = useContext(coursesContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState(null);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  function handleAdd() {
    let newCourse = new FormData();
    newCourse.append("video", video);
    newCourse.append("title", title);
    newCourse.append("description", description);
    newCourse.append("price", price);
    newCourse.append("category", category);
    addCourse(newCourse, navigate);
  }

  return (
    <>
      <div>
        <h2>AddCourse</h2>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Video"
          onChange={(e) => setVideo(e.target.files)}
        />
        <button onClick={handleAdd}>Add Course</button>
      </div>
    </>
  );
};

export default AddCourse;
