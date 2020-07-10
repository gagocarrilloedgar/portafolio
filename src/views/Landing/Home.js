import React from "react";
import AppBarIndex from "./components/AppBar";
import { HeroComponent } from "./components/HeroComponent";
import { CssBaseline } from "@material-ui/core";
import CookiesPolicy from "../../components/views/cookies.component";
import ProjecGridByTags from "../../components/views/projectGridTags.component";
import { Route } from "react-router-dom";
import { Switch } from "wouter";
import { Helmet } from "react-helmet";

function Index() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Portfolio || El complemento perfecto para tu CV </title>
      </Helmet>
      <CssBaseline />
      <AppBarIndex />
      <Switch>
        <Route path="/index/tags" component={ProjecGridByTags} />
        <Route path="/index">
          <AppBarIndex />
          <HeroComponent />
        </Route>
        <Route path="/">
          <HeroComponent />
        </Route>
      </Switch>
      <CookiesPolicy />
    </React.Fragment>
  );
}

export default Index;
