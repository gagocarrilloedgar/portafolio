import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";

import { ButtonContained } from "common";
import { UserContext } from "hooks";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

const Profile = () => {
  const { t } = useTranslation();
  const { user, handleChange, updateUserById } = useContext(UserContext);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Card className={classes.card} elevation={1}>
              <CardContent className={classes.cardContent}>
                <TextField
                  margin="normal"
                  id="name"
                  label={t("profile.editable.name")}
                  type="text"
                  fullWidth
                  multiline
                  value={user.username}
                  onChange={handleChange("username")}
                  variant="outlined"
                />
                <TextField
                  margin="normal"
                  id="name"
                  label={t("profile.editable.email")}
                  type="text"
                  fullWidth
                  multiline
                  value={user.email}
                  onChange={handleChange("email")}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label={t("profile.editable.who")}
                  fullWidth
                  value={user.whoAmI}
                  onChange={handleChange("whoAmI")}
                  multiline
                  margin="normal"
                  rows={3}
                  variant="outlined"
                />
                <TextField
                  margin="normal"
                  id="name"
                  label={t("profile.editable.lookingfor")}
                  value={user.lookingFor}
                  onChange={handleChange("lookingFor")}
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </CardContent>
              <CardActions className={classes.cardActions1}>
                <ButtonContained
                  action={updateUserById}
                  title={t("profile.editable.buttons.save")}
                />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
