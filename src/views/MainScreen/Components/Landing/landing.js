import React from "react";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LandingBar, HeroComponent } from "./components";
import { HelmetMain } from "common";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      <LandingBar />
      <Switch>
        <Route path="/index/user" component={HeroComponent} />
      </Switch>
    </React.Fragment>
  );
};

export default Landing;
