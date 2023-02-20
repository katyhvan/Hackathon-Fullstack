import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
// import JSPage from "./pages/JSPage";
// import PhpPage from "./pages/PhpPage";
// import PythonPage from "./pages/PythonPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import EditCoursePage from "./pages/EditCoursePage";
import ShopPage from "./pages/ShopPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import RestorePage from "./pages/RestorePage";
import PayPage from "./pages/PayPage";

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
    element: <CourseDetailsPage />,
    id: 5,
  },
  {
    link: "/edit/:id",
    element: <EditCoursePage />,
    id: 6,
  },
  {
    link: "/shop",
    element: <ShopPage />,
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
    link: "/admin",
    element: <AdminPage />,
    id: 10,
  },
  {
    link: "/restore",
    element: <RestorePage />,
    id: 11,
  },
  {
    link: "/pay",
    element: <PayPage />,
    id: 12,
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
