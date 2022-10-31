import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import JSPage from "./pages/JSPage";
import PhpPage from "./pages/PhpPage";
import PythonPage from "./pages/PythonPage";
import CourseDetails from "./pages/CourseDetails";
import EditCourse from "./pages/EditCourse";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

const PAGES_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    link: "/register",
    element: <RegisterPage />,
    id: 2,
  },
  {
    link: "/login",
    element: <LoginPage />,
    id: 3,
  },
  {
    link: "/courses",
    element: <CoursesPage />,
    id: 4,
  },
  {
    link: "/details/:id",
    element: <CourseDetails />,
    id: 5,
  },
  {
    link: "/edit/:id",
    element: <EditCourse />,
    id: 6,
  },
  {
    link: "/cart",
    element: <CartPage />,
    id: 7,
  },
  {
    link: "*",
    element: <NotFoundPage />,
    id: 8,
  },
  {
    link: "/favorites",
    element: <FavoritesPage />,
    id: 9,
  },
  {
    link: "/js",
    element: <JSPage />,
    id: 10,
  },
  {
    link: "/python",
    element: <PythonPage />,
    id: 11,
  },
  {
    link: "/php",
    element: <PhpPage />,
    id: 12,
  },
  {
    link: "/c+",
    element: <CoursesPage />,
    id: 13,
  },
];

const Routing = () => {
  return (
    <Routes>
      {PAGES_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
