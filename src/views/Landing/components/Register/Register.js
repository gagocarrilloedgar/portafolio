import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Grid,
  CssBaseline,
  Button,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { v4 as uuidv4 } from "uuid";

import {
  InfoDialog,
  GoogleLogIn,
  HelmetMain,
  PrivacyPolicy,
  CookiesPolicy,
  ButtonContained,
  PrivacyPolicyCheckBox,
} from "common";
import { UserContext, OpenContext } from "hooks";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(UserContext);
  const { privacy } = useContext(OpenContext);

  const { t } = useTranslation();

  const onSubmit = async (e) => {
    if (privacy === true) {
      e.preventDefault();
      const user = {
        username: username,
        password: password,
        email: email,
        preonsalURL: uuidv4(),
      };
      await register(user);
    } else {
      alert(t("privacy.policy.notChecked"));
    }
  };

  return (
    <React.Fragment>
      <HelmetMain title={t("landig.helmet.register")} />
      <CssBaseline />
      <HelmetMain title={"asfd"} />
      <Grid className="auth-wrapper">
        <Grid item>
          <Card className="auth-inner" raised>
            <form onSubmit={onSubmit} validate>
              <Typography variant="h3" gutterBottom>
                {t("landing.register.title")}
              </Typography>
              <CardContent>
                <TextField
                  margin="dense"
                  label={t("landing.register.nameLabel")}
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="outlined"
                />
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

                <PrivacyPolicy />
                <PrivacyPolicyCheckBox />

                <Button
                  style={{ marginTop: "5px" }}
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  {t("landing.login.registerButton")}
                </Button>

                <p className="text-center">
                  {t("landing.register.googleOption")}
                </p>
                <GoogleLogIn />
              </CardContent>

              <p className="forgot-password text-right">
                {t("landing.register.alreadyuser")}
                <a href="/index/login">{t("landing.register.loginButton")}</a>
              </p>
            </form>
          </Card>
          <InfoDialog />
        </Grid>
        <CookiesPolicy />
      </Grid>
    </React.Fragment>
  );
};

export default Register;
