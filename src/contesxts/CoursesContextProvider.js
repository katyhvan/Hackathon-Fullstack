import React, { useReducer } from "react";
import axios from "axios";

export const coursesContext = React.createContext();

const INIT_STATE = {
  courses: [],
  categories: [],
  coursesDetails: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload.results,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_COURSES_DETAILS":
      return {
        ...state,
        coursesDetails: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://34.28.29.118/api/v1/";

const CoursesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //read
  async function getCourses() {
    try {
      const res = await axios(`${API}courses/`);
      dispatch({
        type: "GET_COURSES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //add
  async function addCourse(newCourse, navigate) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Token ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}courses/`, newCourse, config);
      navigate("/courses");
      getCourses();
    } catch (err) {
      console.log(err);
    }
  }

  //categories
  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Token ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}categories/`, config);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //delete
  async function deleteCourses(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Token ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}courses/${id}`, config);
      getCourses();
    } catch (err) {
      console.log(err);
    }
  }

  //update/details
  async function getCoursesDetails(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Token ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios(`${API}courses/${id}`, config);
      dispatch({
        type: "GET_COURSES_DETAILS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function saveEditedCourse(newCourse) {
    await axios.patch(`${API}courses/${newCourse.id}`, newCourse);
    getCourses();
  }

  return (
    <coursesContext.Provider
      value={{
        courses: state.courses,
        categories: state.categories,
        coursesDetails: state.coursesDetails,

        addCourse,
        getCourses,
        getCategories,
        deleteCourses,
        getCoursesDetails,
        saveEditedCourse,
      }}
    >
      {children}
    </coursesContext.Provider>
  );
};

export default CoursesContextProvider;
