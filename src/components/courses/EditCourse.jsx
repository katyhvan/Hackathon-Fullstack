import React, { useState, useContext, useEffect } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const EditCourse = () => {
  const navigate = useNavigate();

  const { courseDetails, getCoursesDetails, saveEditedCourse } =
    useContext(coursesContext);

  const { id } = useParams();
  const [course, setCourse] = useState(courseDetails);
  // const [image, setImage] = useState(courseDetails.image);

  useEffect(() => {
    getCoursesDetails(id);
  }, []);

  useEffect(() => {
    setCourse(courseDetails);
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
              placeholder="Title"
              onChange={handleInp}
              value={course.title}
            />
            <input
              className="edit-inp"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleInp}
              value={course.description}
            />
            <input
              className="edit-inp"
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleInp}
              value={course.price}
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
            {/* <input
              className="edit-inp"
              type="file"
              name="image"
              value={course.image}
              accept="image/*"
              onChange={handleInp}
            /> */}
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
