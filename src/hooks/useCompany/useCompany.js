import React, { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import { getJWT, localSDB, setJWT, routerMain } from "utils";
import axios from "axios";
import { OpenContext } from "hooks";

export const CompanyContext = createContext();

export function CompanyContextProvider(props) {

  const [company, setUser] = useState({});
  const [companyToFind, setUserToFind] = useState({});
  const { setOpen } = useContext(OpenContext);
  const [openRegister, setOpenRegister] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (getJWT(localSDB.company) === null) {
      console.log("user not set yet");
    } else {
      setUser(getJWT(localSDB.company));
    }
  }, []);

  const handleChange = (prop) => (event) => {
    setUser({
      ...user,
      [prop]: event.target.value,
    });
  };

  const updateUserById = () => {
    setJWT(localSDB.user, user);
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
    setJWT(localSDB.user, user);
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
        setJWT(localSDB.user, res.data.body);
        setJWT(localSDB.token, res.data.header);
        setUser(res.body);
        window.location = "/app";
      })
      .catch((e) => {
        console.log(e);
        setOpen();
      });
  }

  //login
  async function login(user) {
    axios
      .post(routerMain.userRouter.login, user)
      .then((res) => {
        setJWT(localSDB.user, res.data.body);
        setJWT(localSDB.token, res.data.header);
        setUser(res.body);
        window.location = "/app";
      })
      .catch((err) => {
        console.log(err);
        setOpen();
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
    localStorage.removeItem(localSDB.google);
    localStorage.removeItem(localSDB.user);
    localStorage.removeItem(localSDB.token);
    localStorage.removeItem(localSDB.projects);

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
        setJWT(localSDB.user, resp.data.body);
        setJWT(localSDB.token, resp.data.body);
        window.location = "/app";
      })
      .catch((err) => {
        console.log("fasdfadsgafdga");
        console.log(err);
        if (id === 1) {
          setOpen();
        } else {
          setOpenRegister((openRegister) => !openRegister);
        }
      });
  };

  const updateUserLeagues = () =>{
    setJWT(localSDB.user, user);
    setUser(user);
    const toSend = {
      leagues: user.leagues,
    };
    axios
      .post(routerMain.userRouter.updateLeagues + user._id, toSend)
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
  }

  return (
    <UserContext.Provider
      value={{
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
        setOpen,
        setOpenRegister,
        openRegister,
        error,
        setError,
        updatePersonalURL,
        updateUserLeagues,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
