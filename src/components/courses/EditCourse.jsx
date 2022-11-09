import React, { useState, useContext, useEffect } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const EditCourse = () => {
  const navigate = useNavigate();

  const { coursesDetails, getCoursesDetails, saveEditedCourse } =
    useContext(coursesContext);

  const { id } = useParams();
  const [course, setCourse] = useState(coursesDetails);

  useEffect(() => {
    getCoursesDetails(id);
  }, []);

  useEffect(() => {
    setCourse(coursesDetails);
  }, [coursesDetails]);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...course,
        [e.target.name]: Number(e.target.value),
      };
      setCourse(obj);
    } else if (e.target.name === "image") {
      let obj = {
        ...course,
        [e.target.name]: e.target.files[0],
      };
      setCourse(obj);
    } else {
      let obj = {
        ...course,
        [e.target.name]: e.target.value,
      };
      setCourse(obj);
    }
  }

  const saveEdited = () => {
    const formData = new FormData();
    formData.append("title", course.title);
    formData.append("description", course.description);
    formData.append("price", course.price);
    formData.append("image", course.image);

    return formData;
  };

  return (
    <>
      {course ? (
        <>
          <div className="edit-form">
            <h2 className="edit-title">Edit Course</h2>
            <input
              className="edit-inp"
              type="text"
              name="title"
              placeholder="Title"
              value={course.title}
              onChange={handleInp}
            />
            <input
              className="edit-inp"
              type="text"
              name="description"
              placeholder="Description"
              value={course.description}
              onChange={handleInp}
            />
            <input
              className="edit-inp"
              type="number"
              name="price"
              placeholder="Price"
              value={course.price}
              onChange={handleInp}
            />
            <input
              className="edit-inp"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInp}
            />
            <button
              className="save-btn"
              onClick={() => {
                saveEditedCourse(saveEdited(), id);
                navigate("/courses");
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default EditCourse;
