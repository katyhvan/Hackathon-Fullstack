import React, { useReducer } from "react";
import { getCounOfFavorites } from "../helpers/functions";

export const favoritesContext = React.createContext();

const FAVORITES = {
  GET_FAVORITES: "GET_FAVORITES",
  GET_FAVORITES_LENGTH: "GET_FAVORITES_LENGTH",
};

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")),
  favoritesLength: getCounOfFavorites(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAVORITES.GET_FAVORITES:
      return { ...state, favorites: action.payload };
    case FAVORITES.GET_FAVORITES_LENGTH:
      return { ...state, favoritesLength: action.payload };
    default:
      return state;
  }
}

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({
          courses: [],
        })
      );
      favorites = {
        courses: [],
      };
    }
    dispatch({
      type: FAVORITES.GET_FAVORITES,
      payload: favorites,
    });
  };

  const addCourseToFavorites = (course) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!favorites) {
      favorites = {
        courses: [],
      };
    }

    let favoriteCourse = {
      item: course,
    };

    let courseToFind = favorites.courses.filter(
      (elem) => elem.item.id === course.id
    );

    if (courseToFind.length === 0) {
      favorites.courses.push(favoriteCourse);
    } else {
      favorites.courses = favorites.courses.filter(
        (elem) => elem.item.id !== course.id
      );
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    dispatch({
      type: FAVORITES.GET_FAVORITES,
      payload: favorites,
    });
  };

  function deleteFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    console.log(favorites);
    favorites.courses = favorites.courses.filter((elem) => elem.item.id !== id);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    getFavorites();

    dispatch({
      type: FAVORITES.GET_FAVORITES_LENGTH,
      payload: favorites,
    });
  }

  const values = {
    favorites: state.favorites,
    favoritesLength: state.favoritesLength,

    getFavorites,
    addCourseToFavorites,
    deleteFavorites,
  };

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
