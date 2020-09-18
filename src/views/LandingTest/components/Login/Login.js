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
import { getJWT, localSDB, window } from "utils";
import { useTranslation } from "react-i18next";
import { InfoDialog, GoogleLogIn, HelmetMain, CookiesPolicy } from "common";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);
  const { getUserProjects } = useContext(ProjectContext);
  const { open } = useContext(OpenContext);

  const { toApp } = window();
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
    getUserProjects();
  };

  useEffect(() => {
    if (getJWT(localSDB.token)) {
      toApp();
    }
  }, []);

  return (
    <React.Fragment>
      <Grid className="auth-wrapper">
        <CssBaseline />
        <HelmetMain title={"asfd"} />
        <Grid item>
          <Card className="auth-inner-login" raised>
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom className="phoneTitle">
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
                <a href="/index/register">{t("landing.login.registerButton")}</a>
              </p>
            </form>
          </Card>
        </Grid>
        <InfoDialog />
      </Grid>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default Login;
