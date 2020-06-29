import React from "react";
import AppBarIndex from "./components/AppBar";
import { HeroComponent } from "./components/HeroComponent";
import { CssBaseline } from "@material-ui/core";
function Index() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarIndex />
      <HeroComponent />
    </React.Fragment>
  );
}

export default Index;
