import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";

import AuthContextProvider from "./contesxts/AuthContextProvider";
import CoursesContextProvider from "./contesxts/CoursesContextProvider";
import ShopContextProvider from "./contesxts/ShopContextProvider";
import FavoritesContextProvider from "./contesxts/FavoritesContextProvider";

const App = () => {
  return (
    <>
      <FavoritesContextProvider>
        <ShopContextProvider>
          <CoursesContextProvider>
            <AuthContextProvider>
              <Navbar />
              <Routing />
            </AuthContextProvider>
          </CoursesContextProvider>
        </ShopContextProvider>
      </FavoritesContextProvider>
    </>
  );
};

export default App;
