import React, { useState, useContext, useEffect } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditCourse = () => {
  const navigate = useNavigate();

  const {
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
    let obj = {
      ...course,
      [e.target.name]: e.target.value,
    };
    setCourse(obj);
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
            />
            <input
              className="edit-inp"
              type="text"
              name="description"
              placeholder="Description"
            />
            <input
              className="edit-inp"
              type="number"
              name="price"
              placeholder="Price"
            />
            {/* <select className="chooseCategory">
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
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
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
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditCourse;
