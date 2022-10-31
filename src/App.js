import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
};

export default App;
