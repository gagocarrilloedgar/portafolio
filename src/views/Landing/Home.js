import React from "react";
import AppBarIndex from "./components/AppBar";
import { HeroComponent } from "./components/HeroComponent";
import { CssBaseline } from "@material-ui/core";
import CookiesPolicy from "../../components/views/cookies.component";

function Index() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarIndex />
      <HeroComponent />
      <CookiesPolicy />
    </React.Fragment>
  );
}

export default Index;
