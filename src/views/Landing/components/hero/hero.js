import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./hero.css";
import { CookiesPolicy } from "common";
import { HeroFourth, HeroSecond, HeroThird } from "./Sections";
import Ellpise1 from "./assets/Ellipse1.png";
import Ellipse2 from "./assets/Ellipse2.png";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const HeroComponent = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="background">
        <Grid container justify="space-around">
          <Grid item sm={12} lg={12}>
            <Typography
              variant="h1"
              style={{
                marginTop: "20px",
                familyFont: "Fira, Sans",
                fontWeight: "800",
                color: "#3A484A",
              }}
            >
              {t("landing.hero.title")}
            </Typography>
            <Typography style={{ color: "grey" }} variant="h2">
              {t("landing.hero.subtitle")}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginTop: "5px", marginBottom: "0px", color: "grey" }}
            >
              {t("landing.hero.beta")}
            </Typography>
            <Button
              variant="contained"
              onClick={() =>
                window.open("https://edgargcupc.typeform.com/to/u3E6v9Hy")
              }
              className="bluebutton"
              style={{
                margin: "20px",
                backgroundColor: "#2255ff",
                fontSize: "20px",
                color: "white",
                fontFamily: "Fira Sans",
                borderRadius: 40,
              }}
            >
              {t("landing.hero.startBtn")}
            </Button>
            <div className="icons" container justify="center" sm={12} lg={12} >
              <a margin="10px" href="https://www.facebook.com/projectportfolio/">
                <FacebookIcon style={{ color: "#2255ff", fontSize: "40px" }} />
              </a>
              <a margin="10px" href="https://www.instagram.com/pportfol.io">
                <InstagramIcon style={{ color: "#2255ff", fontSize: "40px" }} />
              </a>
              <a margin="10px" href="https://www.linkedin.com/company/pportfolio">
                <LinkedInIcon style={{ color: "#2255ff", fontSize: "40px" }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="ellipseFloat" >
        <img src={Ellpise1} alt="ellipse" />
      </div>
      <div className="ellipseFloat2" >
        <img src={Ellipse2} alt="ellipse2" />
      </div>
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
      <CookiesPolicy />
    </React.Fragment>

  );
};

export default HeroComponent;
