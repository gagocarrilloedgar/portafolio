import React from "react";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LandingBar, Landing, Business } from "./Components";
import { HelmetMain, Login, Register } from "common";

export const MainScreen = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      <LandingBar />
      <Switch>
        <Route path="/index/business" component={Business} />
        <Route path="/index/user" component={Landing} />
        <Route path="/index/login" component={Login} />
        <Route path="/index/register" component={Register} />
        <Route path="/index/blogin" component={Login} />
        <Route path="/index/bregister" component={Register} />
        <Route path="/" component={Landing} />
      </Switch>
    </React.Fragment>
  );
};

