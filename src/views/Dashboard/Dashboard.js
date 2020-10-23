import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { CookiesPolicy, Footer } from "common";

import {
  Layout,
  DashboardBar,
  DrawerMain,
  Main,
  Profile,
  Learn,
  Leagues,
  Home,
  ProjectsGrid,
  Retos,
} from "./components";
import { TutorialDialog } from "./components";
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
            <Route path="/app/learn" component={Learn} />
            <Route path="/app/leagues" component={Leagues} />
            <Route path="/app/projects" component={ProjectsGrid} />
            <Route path="/app/retos" component={Retos} />
            <Route path="/app" component={Home} />
          </Switch>
        </Main>
      </Layout>
      <CookiesPolicy />
      <TutorialDialog />
    </React.Fragment>
  );
};

export default Dashboard;
