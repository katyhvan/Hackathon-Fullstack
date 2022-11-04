import { Category } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { coursesContext } from "../../contesxts/CoursesContextProvider";
import "../../styles/AddCourse.css"

const AddCourse = () => {
  const navigate = useNavigate();

  const { courses, addCourse, categories } = useContext(coursesContext);

  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  function handleAdd() {
    let newCourse = new FormData();
    newCourse.append("title", title);
    newCourse.append("description", description);
    newCourse.append("price", price);
    newCourse.append("category", category);
    newCourse.append("image", image);
    addCourse(newCourse, navigate);
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
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <select className="chooseCategory" value={category} onChange={(e) => setCategory(e.target.value)}>
			   <option>Choose category...</option>
			   {categories?.map(item => (
				 <option key={item.id} value={item.id}>{item.title}</option>
			   ))}
			  </select>

        <input
          type="file"  
          accept="image"
          className="add-inp"
          placeholder="Image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="add-btn" onClick={handleAdd}>Add</button>
      </div>
    </>
  );
};

export default AddCourse;
