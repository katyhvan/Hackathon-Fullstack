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

  // console.log(course);

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
      console.log(obj);
    }
  }

  // function handleInp(e) {
  //   if (e.target.name === "price") {
  //     let obj = {
  //       ...course,
  //       [e.target.name]: Number(e.target.value),
  //     };
  //     setCourse(obj);
  //   } else {
  //     let obj = {
  //       ...course,
  //       [e.target.name]: e.target.value,
  //     };
  //     setCourse(obj);
  //     console.log(obj);
  //   }
  // }

  // const formData = new FormData();
  // formData.append("title", course.title);
  // formData.append("description", course.description);
  // formData.append("price", course.price);
  // formData.append("image", course.image);

  // let editCourse = {
  //   ...formData,
  //   id: id,
  // };
  // setCourse(editCourse);
  saveEditedCourse(course);

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
              className="save-btn"
              onClick={() => {
                saveEditedCourse(course);
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
