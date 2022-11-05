import React, { useContext, useEffect, useState } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import CoursesCard from "../../components/courses/CoursesCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

import "../../styles/CoursesList.css";

const CoursesList = () => {
  const { courses, getCourses } = useContext(coursesContext);

  //search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    setSearchParams({
      search: search,
    });
  }, [search]);

  useEffect(() => {
    getCourses();
    setCurrentPage(1);
  }, [searchParams]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  let itemsOnPage = 5;
  let count = Math.ceil(courses.length / itemsOnPage);

  function handlePage(e, p) {
    setCurrentPage(p);
  }

  function currentData() {
    const begin = (currentPage - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return courses.slice(begin, end);
  }

  useEffect(() => {
    getCourses(window.location.search);
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="courses-list">
        {currentData().map((item) => (
          <CoursesCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination count={10} page={currentPage} onChange={handlePage} />
    </>
  );
};

export default CoursesList;
