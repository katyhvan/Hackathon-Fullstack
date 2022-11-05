import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const colors = {
  orange: "#FFBA5A",
  grey: "a9a9a9",
};

const stars = Array(5).fill(0);

const Stars = () => {
  return (
    <>
      {stars.map((_, index) => {
        return <StarBorderIcon key={index} />;
      })}
    </>
  );
};

export default Stars;
