import React, { useContext, useEffect, useState } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import CoursesCard from "../../components/courses/CoursesCard";

import "../../styles/CoursesList.css";

const CoursesList = () => {
  const { courses, getCourses } = useContext(coursesContext);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="courses-list">
      {courses?.map((item) => (
        <CoursesCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CoursesList;
