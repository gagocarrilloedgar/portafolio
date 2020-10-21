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

import { ProjectContext, UserContext, OpenContext } from "hooks";
import { buttonEventGA, getJWT, localSDB, window } from "utils";
import { useTranslation } from "react-i18next";
import { InfoDialog, GoogleLogIn, HelmetMain, CookiesPolicy } from "common";
import "./style.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);
  const { getUserProjects } = useContext(ProjectContext);
  const { open } = useContext(OpenContext);

  const { toApp, toContact } = window();
  const { t } = useTranslation();

  useEffect(() => {
    console.log("login:" + open.toString());
  });

  const signAction = () => {
    buttonEventGA({ category: "login", action: "empresa", label: "login" });
    toContact();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    login(user);
    getUserProjects();
  };

  useEffect(() => {
    if (getJWT(localSDB.token)) {
      toApp();
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <HelmetMain title={"Ppportfol.io | login"} />
      <div className="background-login">
        <Grid container >
          <Grid className="no-phone-title" item lg={5} sme={12}>
            <Typography variant="h1" align="left"
              style={{
                marginTop: "20px",
                familyFont: "Fira, Sans",
                fontWeight: "800",
                color: "#3A484A",
              }}>
              {t("landing.hero.title")}
            </Typography>
          </Grid>
          <Grid item lg={7} sm={12} >
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
                  <a className="text-center" href="/index/register">{t("landing.login.registerButton")}</a>
                </p>
              </form>
            </Card>
            <InfoDialog />
          </Grid>
        </Grid>
      </div>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default Login;
