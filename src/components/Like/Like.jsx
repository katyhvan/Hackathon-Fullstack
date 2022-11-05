import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Like = () => {
  const [like, setLike] = useState(false);
  let count = 0;
  return (
    <>
      <div onClick={() => setLike(!like)}>
        {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </>
  );
};

export default Like;
