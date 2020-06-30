import React from "react";
import AppBarIndex from "./components/AppBar";
import { HeroComponent } from "./components/HeroComponent";
import { CssBaseline } from "@material-ui/core";
import Axios from "axios";
import { useEffect } from "react";
import CookiesPolicy from "../../components/views/cookies.component";
function Index() {
  useEffect(() => {
    Axios.get("https://api.pexels.com/videos/search?query=nature&per_page=1", {
      headers: {
        Authorization:
          "563492ad6f91700001000001c9bbfdd7f7c747c68d76d810e3f67e3c",
      },
    }).then((res) => console.log(res));
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarIndex />
      <HeroComponent />
      <CookiesPolicy/>
    </React.Fragment>
  );
}

export default Index;
