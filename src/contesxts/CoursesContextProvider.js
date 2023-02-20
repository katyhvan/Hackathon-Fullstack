import React, { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const coursesContext = React.createContext();

const INIT_STATE = {
  courses: [],
  categories: [],
  levels: [],
  coursesDetails: [],
  comments: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload,
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
    case "GET_LEVEL":
      return {
        ...state,
        levels: action.payload,
      };
    case "GET_comments":
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://34.130.53.80/api/v1/";

const CoursesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //read
  async function getCourses() {
    try {
      const res = await axios(`${API}courses/${window.location.search}`);

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
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //levels
  async function getLevel() {
    try {
      const res = await axios(`${API}level/`);
      dispatch({
        type: "GET_LEVEL",
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
      await axios.delete(`${API}courses/${id}/`, config);
      getCourses();
    } catch (err) {
      console.log(err);
      alert("Only owner can delete this course!");
    }
  }

  //update
  //details
  async function getCoursesDetails(id) {
    try {
      const res = await axios(`${API}courses/${id}/`);
      dispatch({
        type: "GET_COURSES_DETAILS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //save
  async function saveEditedCourse(newCourse, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Token ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.patch(`${API}courses/${id}/`, newCourse, config);
      getCourses();
    } catch (error) {
      setError([error.response.data.detail]);
      console.log(error);
      alert("Only owner can change this course!");
    }
  }

  //filter
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };

  //comments
  async function getComments(id) {
    try {
      const res = await axios(`${API}courses/${id}/commentss/`);
      dispatch({
        type: "GET_COMMENTS",
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addCommentsToCourse(newComment, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Token ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API}courses/${id}/commentss/`,
        newComment,
        config
      );
      getCourses();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <coursesContext.Provider
      value={{
        courses: state.courses,
        categories: state.categories,
        levels: state.levels,
        coursesDetails: state.coursesDetails,
        comments: state.comments,
        error,

        addCourse,
        getCourses,
        getCategories,
        getLevel,
        deleteCourses,
        getCoursesDetails,
        saveEditedCourse,
        fetchByParams,
        getComments,
        addCommentsToCourse,
        setError,
      }}
    >
      {children}
    </coursesContext.Provider>
  );
};

export default CoursesContextProvider;
