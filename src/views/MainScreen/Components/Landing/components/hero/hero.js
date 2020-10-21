import React, { useState } from "react";
import { Button, CssBaseline, Grid, TextField, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./hero.css";
import { CookiesPolicy } from "common";
import { HeroFourth, HeroSecond, HeroThird } from "./Sections";
import Ellpise1 from "./assets/Ellipse1.png";
import Ellipse2 from "./assets/Ellipse2.png";

import { buttonEventGA } from "utils";
import { SocialButtons } from "common/SocialButtons";
import emailjs from "emailjs-com";


const HeroComponent = () => {
  const { t } = useTranslation();

  const [formTemplate, setForm] = useState({
    subject: "BusinessSubscriber",
    email: "",
  });

  //let index = values.projects.findIndex((project) => project._id === card._id);
  //console.log("found id: " + index);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formParameters = {
      from_email: formTemplate.email,
    };

    emailjs
      .send(
        "businesspportfolio",
        "user_subs",
        formParameters,
        "user_9iXWknkRZxYbm42EanlCo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(
      t("business.contact.success")
    );

    buttonEventGA({ category: "landing", action: "subscribe", label: "hero1" });
    resetForm();
  };

  const resetForm = () => {
    setForm({
      email: "",
      subject: "Business",
    });
  };

  const handleChange = (prop) => (event) => {
    setForm({
      ...formTemplate,
      [prop]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="background">
        <Grid container justify="space-around">
          <Grid item sm={12} lg={12}>
            <Typography
              variant="h1"
              align="center"
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
           
            <TextField
              variant="outlined"
              margin="normal"
              label={t("business.contact.emailplaceholder")}
              type="email"
              id="email"
              onChange={handleChange("email")} />
            <Button
              variant="contained"
              onClick={handleSubmit}
              className="bluebutton"
              style={{
                margin: "20px",
                backgroundColor: "#2255ff",
                fontSize: "20px",
                color: "white",
                fontFamily: "Fira Sans",
                borderRadius: 5,
              }}
            >
              {t("landing.hero.startBtn")}
            </Button>
            <SocialButtons />

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
