import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";

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
          </AuthContextProvider>
        </CoursesContextProvider>
      </ShopContextProvider>
    </>
  );
};

export default App;
