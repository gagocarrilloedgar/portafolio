import React, { useState, useEffect } from "react";

import { Box, CssBaseline, Grid } from "@material-ui/core";

import { CookiesPolicy, HelmetMain } from "common";
import { routerMain, setJWT, localSDB } from "utils";

import { ProjectsGrid } from "./components";
import { UserCard } from "./components/UserCard";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const url = window.location.pathname.split("/").pop();
    fetch(routerMain.userRouter.findByURL + url)
      .then((resp) => resp.json())
      .then((resp) => {
        setJWT(localSDB.userdata, resp[0]);
        setCurrentUser(resp[0]);
      })
      .catch(() => (window.location = "/404"));
  }, []);

  if (currentUser === null) {
    return <h1>LOADING</h1>;
  } else {
    return (
      <React.Fragment>
        <CssBaseline />
        <HelmetMain title={"Portfolio " + currentUser.username} />
        <Grid className="boxContent" container justify="space-evenly">
          <UserCard />

          <ProjectsGrid userId={currentUser._id} />
        </Grid>
        <CookiesPolicy />
      </React.Fragment>
    );
  }
};

export default UserProfile;
