import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";

import {
  QRProfile,
  ChangePropertyDialog,
  ButtonOutlined,
  PremiumButton,
} from "common";
import { UserContext } from "hooks";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

const Profile = () => {
  const { t } = useTranslation();
  const { user, handleChange, updateUserById } = useContext(UserContext);

  const photoContext = t("profile.editable.picContext");
  const urlContext = t("profile.editable.urlContext");
  const initProfilePicte = "https://source.unsplash.com/random";

  const urlExample = user.username;
  const photoURL = "https://source.unsplash.com/random";

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card
              className={classes.card1}
              elevation={4}
              style={{
                marginRight: "10vw",
              }}
            >
              <CardMedia
                className={classes.cardMedia}
                image={user.image !== "" ? user.image : initProfilePicte}
                title={t("profile.editable.imageTitle")}
              />
              <CardContent className={classes.cardContent1}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {user.username}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  {user.degree}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  align="center"
                  gutterBottom
                  paragraph
                >
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  marginTop: "30px",
                  marginRight: 10,
                }}
              ></CardActions>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Card className={classes.card} elevation={4}>
              <CardContent className={classes.cardContent}>
                <TextField
                  autoFocus
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
                  autoFocus
                  margin="normal"
                  id="name"
                  label={t("profile.editable.what")}
                  type="text"
                  fullWidth
                  value={user.what}
                  onChange={handleChange("what")}
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <TextField
                  autoFocus
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
                <TextField
                  id="outlined-full-width"
                  label={t("profile.editable.university")}
                  placeholder={t("profile.editable.universityDescr")}
                  fullWidth
                  type="text"
                  multiline
                  value={user.university}
                  onChange={handleChange("university")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label={t("profile.editable.level")}
                  placeholder={t("profile.editable.levelDescr")}
                  fullWidth
                  type="text"
                  multiline
                  value={user.degree}
                  onChange={handleChange("degree")}
                  margin="normal"
                  variant="outlined"
                />
              </CardContent>
              <CardActions className={classes.cardActions1}>
                <ButtonOutlined
                  action={updateUserById}
                  title={t("profile.editable.buttons.save")}
                />

                <ChangePropertyDialog
                  toChange="personalURL"
                  title={t("profile.editable.buttons.url")}
                  url={urlExample}
                  context={urlContext}
                />

                <ChangePropertyDialog
                  toChange="image"
                  title={t("profile.editable.changePic")}
                  context={photoContext}
                  url={photoURL}
                />
                <PremiumButton title={"Estilo"} />
                <QRProfile url={user.personalURL} />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
