// import React, { useContext, useEffect, useState } from "react";
// import { coursesContext } from "../../contesxts/CoursesContextProvider";
// import CoursesCard from "../../components/courses/CoursesCard";
// import Pagination from "@mui/material/Pagination";
// import { useSearchParams } from "react-router-dom";

// import "../../styles/CoursesList.css";

// const CoursesList = () => {
//   const { courses, getCourses } = useContext(coursesContext);

//   //search
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [search, setSearch] = useState(searchParams.get("search") || "");

//   useEffect(() => {
//     setSearchParams({
//       search: search,
//     });
//   }, [search]);

//   // useEffect(() => {
//   //   getCourses();
//   //   setCurrentPage(1);
//   // }, [searchParams]);

//   //pagination
//   // const [currentPage, setCurrentPage] = useState(1);
//   // let itemsOnPage = 3;
//   // let count = Math.ceil(courses.length / itemsOnPage);

//   // function handlePage(e, p) {
//   //   setCurrentPage(p);
//   // }

//   // function currentData() {
//   //   const begin = (currentPage - 1) * itemsOnPage;
//   //   const end = begin + itemsOnPage;
//   //   return courses.slice(begin, end);
//   // }

//   useEffect(() => {
//     getCourses();
//   }, []);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <div className="courses-list">
//         {courses.map((item) => (
//           <CoursesCard key={item.id} item={item} />
//         ))}
//       </div>
//       {/* <Pagination
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           margin: "1%",
//         }}
//         count={10}
//         page={currentPage}
//         onChange={handlePage}
//       /> */}
//     </>
//   );
// };

// export default CoursesList;

import React, { useContext, useEffect, useState } from "react";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import CoursesCard from "../../components/courses/CoursesCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

import "../../styles/CoursesList.css";

const CoursesList = () => {
  const { courses, getCourses } = useContext(coursesContext);
  useEffect(() => {
    getCourses();
  }, []);

  //search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    // console.log("hello");

    setSearchParams({
      search: search,
    });
  }, [search]);

  useEffect(() => {
    // console.log("bye");

    getCourses();
    setCurrentPage(1);
  }, [searchParams]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  let itemsOnPage = 3;
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
    getCourses();
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
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1%",
        }}
        count={10}
        page={currentPage}
        onChange={handlePage}
      />
    </>
  );
};

export default CoursesList;
