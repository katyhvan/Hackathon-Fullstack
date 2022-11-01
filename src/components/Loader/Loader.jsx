import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress
        style={{ margin: "10% auto", height: "100px", width: "100px" }}
      />
    </Box>
  );
}
export default Loader;
