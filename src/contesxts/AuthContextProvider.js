import React, { useContext, useState } from "react";
import axios from "axios";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.130.53.80/api/v1/";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function register(formData, navigate) {
    setLoading(true);

    try {
      const res = await axios.post(`${API}accounts/register/`, formData);
      navigate("/login");
      alert("You registered successfully!");
    } catch (err) {
      setError(Object.values(err.response.data));
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
      let Autorization = `Token ${token.access}`;
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

  async function handleLogout(formData, navigate) {
    const token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Token ${token.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    await axios.post(`${API}accounts/logout/`, formData, config);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setCurrentUser(false);
    navigate("/");
  }

  async function getMail(formData, navigate) {
    setLoading(true);

    try {
      const res = await axios.post(`${API}accounts/forgot/`, formData);
      setLoading(false);

      navigate("/restore");
      alert("Code has been sent to your E-Mail");
    } catch (err) {
      console.log(err);
    }
  }

  async function passRecovery(formData, navigate) {
    try {
      const res = await axios.post(`${API}accounts/restore/`, formData);
      navigate("/login");
      setLoading(false);
    } catch (err) {
      console.log(err);
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
    handleLogout,
    checkAuth,
    getMail,
    passRecovery,
  };

  return (
    <>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
