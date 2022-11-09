import React, { useReducer } from "react";
import {
  getCountOfCoursesInCart,
  calcSubPrice,
  calcTotalPrice,
} from "../helpers/functions";

export const shopContext = React.createContext();

const SHOP = {
  GET_SHOP: "GET_SHOP",
  GET_SHOP_LENGTH: "GET_SHOP_LENGTH",
};

const INIT_STATE = {
  shop: JSON.parse(localStorage.getItem("shop")),
  shopLength: getCountOfCoursesInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SHOP.GET_SHOP: {
      return { ...state, shop: action.payload };
    }
    case SHOP.GET_SHOP_LENGTH: {
      return { ...state, shopLength: action.payload };
    }
    default: {
      return state;
    }
  }
}

const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getShop = () => {
    let shop = localStorage.getItem("shop");
    if (!shop) {
      localStorage.setItem(
        "shop",
        JSON.stringify({
          courses: [],
          totalPrice: 0,
        })
      );
      shop = {
        courses: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: SHOP.GET_SHOP,
      payload: shop,
    });
  };

  const addCoursesToShop = (course) => {
    let shop = JSON.parse(localStorage.getItem("shop"));
    if (!shop) {
      shop = {
        courses: [],
        totalPrice: 0,
      };
    }

    let newCourse = {
      item: course,
      count: 1,
      subPrice: +course.price,
    };

    let courseToFind = shop.courses.filter(
      (elem) => elem.item.id === course.id
    );

    if (courseToFind.length === 0) {
      shop.courses.push(newCourse);
    } else {
      shop.courses = shop.courses.filter((elem) => elem.item.id !== course.id);
    }

    shop.totalPrice = calcTotalPrice(shop.courses);
    localStorage.setItem("shop", JSON.stringify(shop));

    dispatch({
      type: SHOP.GET_SHOP,
      payload: shop,
    });
  };

  const changeCourseCount = (count, id) => {
    if (count < 1) {
      alert("Count of courses can not be negative!");
      return;
    }
    let shop = JSON.parse(localStorage.getItem("shop"));
    shop.courses = shop.courses.map((course) => {
      if (course.item.id === id) {
        course.count = count;
        course.subPrice = calcSubPrice(course);
      }
      return course;
    });
    shop.totalPrice = calcTotalPrice(shop.courses);
    localStorage.setItem("shop", JSON.stringify(shop));

    dispatch({
      type: SHOP.GET_SHOP,
      payload: shop,
    });
  };

  function parseShop() {
    let shop = JSON.parse(localStorage.getItem("shop"));
    dispatch({
      type: SHOP.GET_SHOP,
      payload: shop,
    });
  }

  function deleteCoursesInShop(id) {
    let shop = JSON.parse(localStorage.getItem("shop"));

    shop.courses = shop.courses.filter((elem) => elem.item.id !== id);
    shop.totalPrice = calcTotalPrice(shop.courses);
    localStorage.setItem("shop", JSON.stringify(shop));

    getShop();

    dispatch({
      type: SHOP.GET_SHOP_LENGTH,
      payload: shop,
    });
  }

  const values = {
    shop: state.shop,
    shopLength: state.shopLength,

    getShop,
    addCoursesToShop,
    changeCourseCount,
    parseShop,
    deleteCoursesInShop,
  };

  return <shopContext.Provider value={values}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
