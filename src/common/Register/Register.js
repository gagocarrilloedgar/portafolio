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

import { v4 as uuidv4 } from "uuid";
import { InfoDialog, GoogleLogIn, HelmetMain, CookiesPolicy } from "common";
import { UserContext } from "hooks";
import { useTranslation } from "react-i18next";

import "./style.css";

const Register = () => {
  const [username] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(UserContext);
  const { t } = useTranslation();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      email: email,
      preonsalURL: uuidv4(),
    };
    await register(user);
  };

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
              <form onSubmit={onSubmit} validate>
                <Typography
                  variant="h3"
                  style={{ fontFamily: "Fira Sans", fontWeight: "700" }}
                  gutterBottom
                >
                  {t("landing.register.title")}
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
                  <a href="/index/login">{t("landing.register.loginButton")}</a>
                </p>
              </form>
            </Card>
            <InfoDialog /></Grid>
        </Grid>
      </div>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default Register;
