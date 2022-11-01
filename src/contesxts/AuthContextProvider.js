import axios from "axios";
import React, { useContext, useState } from "react";

const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

// const API = "http://35.184.19.231/";
const API = "http://localhost:5050/users";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function register(formData, navigate) {
    setLoading(true);

    try {
      // const res = await axios.post(`${API}accounts/register/`, formData);

      const res = await axios.post(API, formData);

      navigate("/login");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function login(formData, email, navigate) {
    setLoading();

    try {
      const res = await axios.post(API, formData);
      localStorage.setItem("users", currentUser);
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError("Error");
    } finally {
    }
  }

  const values = {
    currentUser,
    error,
    loading,

    setCurrentUser,
    setError,
    setLoading,
    register,
    login,
  };

  return (
    <>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
