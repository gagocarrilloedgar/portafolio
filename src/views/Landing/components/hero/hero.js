import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./hero.css";
import { CookiesPolicy } from "common";
import { HeroFourth, HeroSecond, HeroThird } from "./Sections";

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
          </Grid>
        </Grid>
      </div>
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default HeroComponent;