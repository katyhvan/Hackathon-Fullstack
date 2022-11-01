import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contesxts/AuthContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routing />
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
