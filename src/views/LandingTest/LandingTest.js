import React from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { LandingBar, HeroComponent } from "./components";
import { HelmetMain } from "common";
import { Login, Register } from "./components";

const LandingTest = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      <CssBaseline />
      <LandingBar />
      <Switch>
        <Route path="/index/register" component={Register} />
        <Route path="/index/login" component={Login} />
        <Route path="/index" component={HeroComponent} />
        <Route path="/" component={HeroComponent} />
      </Switch>
    </React.Fragment>
  );
};

export default LandingTest;
