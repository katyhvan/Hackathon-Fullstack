import React from "react";

export const favoritesContext = React.createContext();

const FavoritesContextProvider = ({ children }) => {
  return <favoritesContext.Provider>{children}</favoritesContext.Provider>;
};

export default FavoritesContextProvider;
