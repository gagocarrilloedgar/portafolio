import React from "react";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LandingBar, HeroComponent } from "./components";
import { HelmetMain, Footer } from "common";
import { Login, Register } from "./components";

const Landing = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      <LandingBar />
      <Switch>
        <Route path="/index/register" component={Register} />
        <Route path="/index/login" component={Login} />
        <Route path="/index" component={HeroComponent} />
        <Route path="/" component={HeroComponent} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
