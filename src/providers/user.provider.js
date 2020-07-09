import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { routerMain } from "../providers/routes/router";
import { getJWT, setJWT, localStorageDB } from "./helpers/jwt";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [usertoFind, setUserToFind] = useState({});
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (prop) => (event) => {
    setUser({
      ...user,
      [prop]: event.target.value,
    });
  };

  useEffect(() => {
    if (getJWT(localStorageDB.user) === null) {
      console.log("user not set yet");
    } else {
      setUser(getJWT(localStorageDB.user));
    }
  }, []);

  const updateUserById = () => {
    setJWT(localStorageDB.user, user);
    setUser(user);
    axios
      .post(routerMain.userRouter.updateUser + user._id, user)
      .then((res) => {
        console.log("updated complete");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePersonalURL = () => {
    setJWT(localStorageDB.user, user);
    setUser(user);
    const toSend = {
      personalURL: user.personalURL,
    };
    axios
      .post(routerMain.userRouter.updateURL + user._id, toSend)
      .then((res) => {
        if (res.data.body === "Error") {
          setError("Error");
          console.log(res.data.body);
        } else {
          setError("");
          console.log("updated complete");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function register(userProps) {
    axios
      .post(routerMain.userRouter.signup, userProps)
      .then((res) => {
        setJWT(localStorageDB.user, res.data.body);
        setJWT(localStorageDB.token, res.data.header);
        setUser(res.body);
        window.location = "/app";
      })
      .catch((e) => {
        console.log(e);
        setOpenRegister((openRegister) => !openRegister);
      });
  }

  //login
  async function login(user) {
    axios
      .post(routerMain.userRouter.login, user)
      .then((res) => {
        setJWT(localStorageDB.user, res.data.body);
        setJWT(localStorageDB.token, res.data.header);
        setUser(res.body);
        window.location = "/app";
      })
      .catch((err) => {
        console.log(err);
        setOpen((open) => !open);
      });
  }

  const getUserById = async (id) => {
    await axios
      .get(routerMain.userRouter.findUser + id)
      .then((user) => setUserToFind(user.data))
      .catch((err) => console.log(err));
  };

  const getUserByURL = async (url) => {
    await fetch(routerMain.userRouter.findByURL + url)
      .then((res) => res.json())
      .then((user) => setUserToFind(user.data))
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem(localStorageDB.google);
    localStorage.removeItem(localStorageDB.user);
    localStorage.removeItem(localStorageDB.token);
    localStorage.removeItem(localStorageDB.projects);

    window.location = "/";
  };

  const googleLogin = (response, id) => {
    setJWT("google", response);
    const googleProfile = response.profileObj;

    const user = {
      username: googleProfile.name,
      email: googleProfile.email,
      image: googleProfile.imageUrl,
      password: googleProfile.googleId,
      personalURL: googleProfile.googleId,
    };

    axios
      .post(routerMain.userRouter.googleLogin, user)
      .then((resp) => {
        setJWT(localStorageDB.user, resp.data.body);
        setJWT(localStorageDB.token, resp.data.body);
        window.location = "/app";
      })
      .catch((err) => {
        console.log("fasdfadsgafdga");
        console.log(err);
        if (id === 1) {
          setOpen((open) => !open);
        } else {
          setOpenRegister((openRegister) => !openRegister);
        }
      });
  };

  const userProviderClass = {
    user,
    googleLogin,
    getUserByURL,
    usertoFind,
    login,
    register,
    getUserById,
    handleChange,
    updateUserById,
    logout,
    open,
    setOpen,
    setOpenRegister,
    openRegister,
    error,
    setError,
    updatePersonalURL,
  };

  return (
    <UserContext.Provider value={userProviderClass}>
      {props.children}
    </UserContext.Provider>
  );
};
