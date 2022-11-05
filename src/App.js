import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contesxts/AuthContextProvider";
import CoursesContextProvider from "./contesxts/CoursesContextProvider";
import ShopContextProvider from "./contesxts/ShopContextProvider";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <CoursesContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Routing />
            <Footer />
          </AuthContextProvider>
        </CoursesContextProvider>
      </ShopContextProvider>
    </>
  );
};

export default App;
