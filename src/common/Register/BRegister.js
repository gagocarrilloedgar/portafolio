import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Grid,
  CssBaseline,
  Button,
  CardContent,
  Card
} from "@material-ui/core";

import { InfoDialog, GoogleLogIn, HelmetMain, CookiesPolicy } from "common";
import { CompanyContext } from "hooks";
import { useTranslation } from "react-i18next";

import "./style.css";
import { Footer } from "common/Footer";

const BRegister = () => {
  const [username] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(CompanyContext);
  const { t } = useTranslation();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: "username",
      password: password,
      email: email,
    };
    await register(user);
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
              <form onSubmit={onSubmit} validate>
                <Typography
                  variant="h3"
                  style={{ fontFamily: "Fira Sans", fontWeight: "700" }}
                  gutterBottom
                >
                  {t("landing.login.title")}
                </Typography>
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

                <p className="forgot-password text-right">
                  {t("landing.register.alreadyuser")}
                  <a href="/index/blogin">{t("landing.register.loginButton")}</a>
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

export default BRegister;
