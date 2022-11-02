import axios from "axios";
import React, { useContext, useState } from "react";

const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.28.29.118/api/v1/";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function register(formData, navigate) {
    setLoading(true);

    try {
      const res = await axios.post(`${API}accounts/register/`, formData);
      navigate("/login");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function login(formData, username, navigate) {
    setLoading();

    try {
      const res = await axios.post(`${API}accounts/login/`, formData);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setCurrentUser(username);
      navigate("/");
    } catch (err) {
      setError([err.response.data.detail]);
    } finally {
      setLoading();
    }
  }

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      let Autorization = `Bearer${token.access}`;
      let res = await axios.post(
        `${API}accounts/logout/`,
        { refresh: token.refresh },
        { headers: { Autorization } }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: token.access })
      );
    } catch (error) {}
  }

  async function handleLogout(navigate) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setCurrentUser(false);
    navigate("/");
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
    handleLogout,
    checkAuth,
  };

  return (
    <>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
