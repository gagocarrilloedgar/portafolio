import React from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { LandingBar, HeroComponent } from "./components";
import { HelmetMain } from "common";
import { ProjectsTagsGrid, Login, Register } from "./components";
import Footer from "./components/Footer/Footer";

const Landing = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      <LandingBar />
      <Switch>
        <Route path="/index/register" component={Register} />
        <Route path="/index/login" component={Login} />
        <Route path="/index/tags" component={ProjectsTagsGrid} />
        <Route path="/index" component={HeroComponent} />
        <Route path="/" component={HeroComponent} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
