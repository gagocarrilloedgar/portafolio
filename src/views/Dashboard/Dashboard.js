import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { CookiesPolicy } from "common";

import {
  Layout,
  DashboardBar,
  DrawerMain,
  Main,
  Profile,
  ProjectsGrid,
} from "./components";
import { AddProject, TutorialDialog } from "./components";
import { getJWT, localSDB } from "utils";
import { useContext } from "react";
import { OpenContext } from "hooks";

export const Dashboard = () => {
  const { setMain } = useContext(OpenContext);

  useEffect(() => {
    if (!getJWT(localSDB.token)) {
      window.location = "/";
    }
    if (!getJWT(localSDB.firsttime)) {
      setMain(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <DashboardBar />
        <DrawerMain />
        <Main>
          <Switch>
            <Route path="/app/user" component={Profile} />
            <Route path="/app" component={ProjectsGrid} />
          </Switch>
          <AddProject />
        </Main>
      </Layout>
      <CookiesPolicy />
      <TutorialDialog />
    </React.Fragment>
  );
};

export default Dashboard;
