import React from "react";
import AddCourse from "../components/courses/AddCourse";
import { useAuth } from "../contesxts/AuthContextProvider";

const AdminPage = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <AddCourse />
    </>
  );
};

export default AdminPage;
