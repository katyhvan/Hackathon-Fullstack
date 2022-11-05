import React, { useState, useContext, useEffect } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const EditCourse = () => {
  const navigate = useNavigate();

  const {
    categories,
    courseDetails,
    getCoursesDetails,
    saveEditedCourse,

    getCourses,
  } = useContext(coursesContext);

  const { id } = useParams();
  const [course, setCourse] = useState(courseDetails);
  // const [image, setImage] = useState(courseDetails.image);

  useEffect(() => {
    getCoursesDetails(id);
  }, []);

  useEffect(() => {
    getCourses(courseDetails);
  }, [courseDetails]);

  function handleInp(e) {
    if ((e.target.name = "price")) {
      let obj = {
        ...course,
        [e.target.name]: Number(e.target.value),
      };
      setCourse(obj);
    } else {
      let obj = {
        ...course,
        [e.target.name]: e.target.value,
      };
      setCourse(obj);
      console.log(obj);
    }
  }

  return (
    <>
      {course ? (
        <>
          <div className="edit-block">
            <h2 className="edit-title">Edit Course</h2>
            <input
              className="edit-inp"
              type="text"
              name="title"
              value={course.title}
              placeholder="Title"
              onChange={handleInp}
            />
            <input
              className="edit-inp"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleInp}
            />
            <input
              className="edit-inp"
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleInp}
            />
            {/* <select
              className="chooseCategory"
              name="category"
              onChange={handleInp}
            >
              <option>Choose category</option>
              {categories?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select> */}
            <input
              className="edit-inp"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInp}
            />
            <button
              className="edit-btn"
              onClick={() => {
                saveEditedCourse(course);
                navigate("/");
              }}
            >
              Save changes
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
