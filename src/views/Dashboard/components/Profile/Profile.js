import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  TextField, Typography, Select, MenuItem, FormControl, InputLabel
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
                <Typography align="left" lg={3}>
                  {t("profile.editable.rank") + ": " + user.rank}
                </Typography>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  fullWidth>
                  <InputLabel>{t("profile.editable.explevel")}</InputLabel>
                  <Select
                    variant="outlined"
                    margin="normal"
                    label={t("profile.editable.explevel")}
                    fullWidth
                    defaultValue={user.level}
                    value={user.level}
                    onChange={handleChange("level")}
                  >
                    <MenuItem value={1}>Student</MenuItem>
                    <MenuItem value={2}>Junior</MenuItem>
                    <MenuItem value={3}>Senior</MenuItem>
                    <MenuItem value={4}>Pro</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  fullWidth>
                  <InputLabel>{t("profile.editable.league")}</InputLabel>
                  <Select
                    defaultValue={user.leagues}
                    label={t("profile.editable.league")}
                    value={user.leagues[0]}
                    onChange={handleChange("leagues")}
                  >
                    <MenuItem value={1}>Digital Marketing</MenuItem>
                    <MenuItem value={2}>Copywritting</MenuItem>
                    <MenuItem value={3}>Web development</MenuItem>
                    <MenuItem value={4}>Data science</MenuItem>
                  </Select>
                </FormControl>

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
      </Container >
    </React.Fragment >
  );
};

export default Profile;
