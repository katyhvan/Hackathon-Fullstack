import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import "../../styles/AddCourse.css"

import "../../styles/AddCourse.css";

const AddCourse = () => {
  const navigate = useNavigate();

  const { addCourse, categories, getCategories, levels, getLevel } =
    useContext(coursesContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCategories();
    getLevel();
  }, []);

  function handleAdd() {
    if (!title.trim() || !description.trim() || !price.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let newCourse = new FormData();
    newCourse.append("title", title);
    newCourse.append("description", description);
    newCourse.append("price", price);
    newCourse.append("category", category);
    newCourse.append("image", image);
    addCourse(newCourse, navigate);
    alert("Successfully added new course!");

    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage("");
  }

  return (
    <>
      <div className="add-block">
        <h2 className="add-title">Your Course</h2>
        <input
          className="add-inp"
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="add-inp"
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="add-inp"
          type="number"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          className="chooseCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Choose category</option>
          {categories?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <select
          className="chooseLevel"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option>Level</option>
          {levels?.map((item) => (
            <option key={item.id} value={item.count}>
              {item.level}
            </option>
          ))}
        </select>
        <input
          className="add-inp"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddCourse;
