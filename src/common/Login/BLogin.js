import React, { useState, useEffect, useContext } from "react";
//Dialog
import {
  Button,
  TextField,
  Typography,
  Grid,
  CssBaseline,
  Card,
} from "@material-ui/core";


import { OpenContext, CompanyContext } from "hooks";
import { useTranslation } from "react-i18next";
import { InfoDialog, GoogleLogIn, HelmetMain, CookiesPolicy } from "common";

import "./style.css";
import { Footer } from "common/Footer";

export const BLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(CompanyContext);
  const { open } = useContext(OpenContext);

  const { t } = useTranslation();

  useEffect(() => {
    console.log("login:" + open.toString());
  });


  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    login(user);
  };

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
              {t("La fiebre gaming ha llegado a los procesos de selección")}
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
          </Grid>
          <Grid item lg={6} sm={12} >
            <Card className="auth-inner" elevation={0} style={{ borderRadius: "15px" }}>
              <form onSubmit={onSubmit}>
                <Typography variant="h3" style={{ fontFamily: "Fira Sans", fontWeight: "700" }} gutterBottom className="phoneTitle">
                  {t("landing.login.title")}
                </Typography>
                <TextField
                  margin="dense"
                  label={t("landing.login.emailLabel")}
                  type="text"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  label={t("landing.login.psswdLabel")}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  style={{ marginTop: "5px" }}
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  {t("landing.login.loginButton")}
                </Button>
                <p className="text-center">{t("landing.login.googleOption")}</p>
                <GoogleLogIn />
                <p className="forgot-password text-right">
                  {t("landing.login.noaccount")}{" "}
                  <a className="text-center" href="/index/bregister">{t("landing.login.registerButton")}</a>
                </p>
              </form>
            </Card>
            <InfoDialog />
          </Grid>
        </Grid>
        <Footer />
      </div>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default BLogin;
