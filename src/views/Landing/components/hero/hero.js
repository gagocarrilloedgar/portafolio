import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./hero.css";
import { CookiesPolicy } from "common";
import sponsors from "./assets/sponsors.png";
import { SeptsButton } from "./Steps";
const HeroComponent = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="background">
        <Grid container justify="space-around">
          <Grid justify="center" item sm={12} lg={12}>
            <Typography
              align="center"
              variant="h1"
              style={{
                marginLeft: "100px",
                familyFont: "Fira, Sans",
                fontWeight: "800",
                color: "#3A484A",
              }}
            >
              {t("landing.hero.title")}
            </Typography>
            <Typography
              style={{ marginLeft: "100px", color: "grey" }}
              align="center"
              variant="h2"
            >
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
              style={{
                margin: "12px",
                backgroundColor: "#2255ff",
                fontSize: "16px",
                color: "white",
                fontFamily: "Fira Sans",
                borderRadius: 40,
              }}
            >
              {t("landing.hero.startBtn")}
            </Button>
            <SeptsButton />
          </Grid>
        </Grid>
      </div>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default HeroComponent;
