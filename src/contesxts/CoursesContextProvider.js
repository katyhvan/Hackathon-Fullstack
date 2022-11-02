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

  //add logic
  async function addCourse(newCourse, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}course/lesson/`, newCourse, config);
      alert("Successfully added new course!");
      console.log(res);
      navigate("/courses");
      // getCourses();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <coursesContext.Provider
      value={{
        courses: state.courses,
        categories: state.categories,
        coursesDetails: state.coursesDetails,

        addCourse,
        // getCourses,
        // getCategories,
        // deleteCourses,
        // getCoursesDetails,
        // saveEditCourses,
      }}
    >
      {children}
    </coursesContext.Provider>
  );
};

export default CoursesContextProvider;

// // read;
// async function getCourses() {
//   try {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     const Authorization = `Bearer ${tokens.access}`;
//     const config = {
//       headers: {
//         Authorization,
//       },
//     };
//     const res = await axios(
//       `${API}/courses/${window.location.search}`,
//       config
//     );

//     dispatch({
//       type: "GET_COURSES",
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// //create
// async function createCourse(newCourse, navigate) {
//   try {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     const Authorization = `Bearer ${tokens.access}`;
//     const config = {
//       headers: {
//         Authorization,
//       },
//     };

//     const res = await axios.post(`${API}`, newCourse, config);
//     alert("Successfully added new article!");
//     console.log(res);
//     navigate("/clothes");
//     // getCourses();
//   } catch (err) {
//     console.log(err);
//   }
// }

// function addCourse(newCourse) {}

// async function getCategories() {
//   try {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     const Authorization = `Bearer ${tokens.access}`;
//     const config = {
//       headers: {
//         Authorization,
//       },
//     };
//     const res = await axios(`${API}/category/list/`, config);
//     dispatch({
//       type: "GET_CATEGORIES",
//       payload: res.data.results,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function deleteCourses(id) {
//   try {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     const Authorization = `Bearer ${tokens.access}`;
//     const config = {
//       headers: {
//         Authorization,
//       },
//     };
//     await axios.delete(`${API}/courses/${id}`, config);
//     getCourses();
//   } catch (err) {
//     console.log(err);
//   }
// }

//details
//   async function getCoursesDetails(id) {
//     try {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios(`${API}/`, config);
//     // console.log(data);
//     dispatch({
//       type: "GET_COURSES_DETAILS",
//       payload: data,
//     });
//   } catch(err) {
//     console.log(err);
//   }
// };

// async function saveEditCourses(newCourse) {
//   await axios.patch(`${API}/${newCourse.id}`, newCourse);
//   getCourses();
// }
