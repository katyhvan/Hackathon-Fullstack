import React, { createContext, useReducer } from "react";

export const authContext = createContext();

const INIT_STATE = {};

const AuthContextPorvider = ({ children }) => {
  return (
    <>
      <authContext.Provider>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextPorvider;
