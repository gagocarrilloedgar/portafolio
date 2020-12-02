import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  CssBaseline,
  Button,
  CardContent,
  Card
} from "@material-ui/core";

import { v4 as uuidv4 } from "uuid";
import { InfoDialog, GoogleLogIn, HelmetMain, CookiesPolicy } from "common";
import { CompanyContext, UserContext } from "hooks";
import { useTranslation } from "react-i18next";

import "./style.css";
import { Footer } from "common/Footer";
import { ButtonOutlinedWhite } from "common/buttons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [buttonTitle, setButton] = useState("");
  const [headerTitle, setHeader] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(UserContext);
  const { bregister } = useContext(CompanyContext);
  const { t } = useTranslation();
  const lastSegment = window.location.href.split("/").pop();
  const [navHref, setNavHref] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (lastSegment === "register") {
      const user = {
        username: email,
        password: password,
        email: email,
        preonsalURL: uuidv4(),
      };
      await register(user);
    } else {
      const user = {
        username: email,
        password: password,
        email: email,
      };
      await bregister(user);
    }
  };

  const handleChangeBusiness = () => {
    if (lastSegment === "register") {
      window.location = "/index/bregister";
    } else {
      window.location = "/index/register";
    }
  }

  useEffect(() => {
    if (lastSegment === "register") {
      setNavHref("/index/login");
      setButton("BUSCO TALENTO");
      setHeader("Tú pones el talento, nosotros las ofertas de empleo");
    } else {
      setNavHref("/index/blogin");
      setButton("TENGO TALENTO");
      setHeader("La fiebre gaming ha llegado a los procesos de selección");
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <HelmetMain title={"Ppportfol.io | login"} />
      <div className="background-login">
        <Grid container >
          <Grid className="no-phone-title" item lg={6} sme={12}>
            <Typography align="left"
              style={{
                fontSize: "50px",
                marginTop: "20px",
                familyFont: "Fira, Sans",
                fontWeight: "900",
                color: "white",
              }}>
              {headerTitle}
            </Typography>
            <Typography
              align="left"
              style={{
                fontSize: "18px",
                familyFont: "Fira, Sans",
                marginTop: "-5px",
                fontWeight: "300",
                color: "white"
              }}
            >
              {"Pportfolio es una nueva plataforma de contratación que a través de la gamificación revoluciona la forma en la que se encuentra trabajo y se progresa profesionalmente en el sector tecnológico"}
            </Typography>
            <Grid align="left">
            <ButtonOutlinedWhite action={handleChangeBusiness} title={buttonTitle} />
            </Grid>
          </Grid>
          <Grid item lg={6} sm={12} >
            <Card className="auth-inner" elevation={0} style={{ borderRadius: "15px" }}>
              <form onSubmit={onSubmit} validate>
                <Typography
                  variant="h3"
                  style={{ fontFamily: "Fira Sans", fontWeight: "700" }}
                  gutterBottom
                >
                  {t("landing.login.title")}
                </Typography>
                <CardContent>
                  <TextField
                    margin="dense"
                    label={t("landing.register.emailLabel")}
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    label={t("landing.register.psswdLabel")}
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                  />

                  <Button
                    style={{ marginTop: "5px" }}
                    color="primary"
                    type="submit"
                    variant="contained"
                  >
                    {t("landing.login.registerButton")}
                  </Button>
                  <p className="text-center">{t("landing.login.googleOption")}</p>

                  <GoogleLogIn />
                </CardContent>

                <p className="forgot-password text-right">
                  {t("landing.register.alreadyuser")}
                  <a href={navHref}>{t("landing.register.loginButton")}</a>
                </p>
              </form>
            </Card>
            <InfoDialog /></Grid>
        </Grid>
        <Footer />
      </div>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default Register;
