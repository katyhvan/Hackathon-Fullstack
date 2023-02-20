import React from "react";
import error from ".././assets/error.jpg"

const NotFoundPage = () => {
  return (
      <div style={{display: 'flex', justifyContent: "center", marginTop: "3%"}}>
      <img style={{width: '60%', height: '60%'}} src={error} alt="error" />
      </div>
  );
};

export default NotFoundPage;