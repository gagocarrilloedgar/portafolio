import React, { useEffect, useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "../views/qrProfile.component";
import { UserContext } from "../../providers/user.provider";
import ChangePropertyDialog from "./changeProperty.component";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  cardMedia: {
    paddingTop: "100%",
    // 16:9
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  Texttitle: {
    fontSize: 14,
  },
  Textpos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const UserProfile = () => {
  var [userfromBackEnd, setUser] = useState({});
  var values = useContext(UserContext);
  const photoContext =
    "Para cambiar la foto de perfil simplemete pega el enlance de tu foto de perfil de red social preferida";
  const urlContext =
    "Aquí puedes personalizar como quieres que se vea tu url pública. Antes de cambiarla ten en cuenta que la incialq eu definiste quedará libre";
  const initProfilePicte = "https://source.unsplash.com/random";

  const urlExample = values.user.username;
  const photoURL = "https://source.unsplash.com/random";

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")).body);
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.heroContent}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Card className={classes.card} elevation={4} raised>
                  <CardMedia
                    className={classes.cardMedia}
                    image={
                      values.user.image !== ""
                        ? values.user.image
                        : initProfilePicte
                    }
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {values.user.username}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {values.user.degree}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      align="justify"
                      gutterBottom
                      paragraph
                    >
                      {values.user.email}
                    </Typography>
                    <TextField
                      id="outlined-full-width"
                      label="Quién soy"
                      fullWidth
                      value={values.user.whoAmI}
                      onChange={values.handleChange("whoAmI")}
                      multiline
                      margin="normal"
                      rows={3}
                      variant="outlined"
                    />
                  </CardContent>
                  <CardActions>
                    <ChangePropertyDialog
                      toChange="image"
                      title="Cambiar foto de perfil"
                      context={photoContext}
                      url={photoURL}
                    />
                    <DialogTitle url={values.user.personalURL} />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={9}>
                <Card className={classes.card} elevation={4}>
                  <CardContent className={classes.cardContent}>
                    <TextField
                      autoFocus
                      margin="normal"
                      id="name"
                      label="Nombre"
                      type="text"
                      fullWidth
                      multiline
                      value={values.user.username}
                      onChange={values.handleChange("username")}
                      variant="outlined"
                    />
                    <TextField
                      autoFocus
                      margin="normal"
                      id="name"
                      label="Qué hago"
                      type="text"
                      fullWidth
                      value={values.user.what}
                      onChange={values.handleChange("what")}
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                    <TextField
                      autoFocus
                      margin="normal"
                      id="name"
                      label="Acutalmente busco..."
                      value={values.user.lookingFor}
                      onChange={values.handleChange("lookingFor")}
                      type="text"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Univerdad donde se cursaron los últimos estudios"
                      placeholder="Placeholder"
                      fullWidth
                      type="text"
                      multiline
                      value={values.user.university}
                      onChange={values.handleChange("university")}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Último grado de estudios"
                      placeholder="CFGM, CFGS, Universidad, Master,Postgrado,Etc,PHD,"
                      fullWidth
                      type="text"
                      multiline
                      value={values.user.degree}
                      onChange={values.handleChange("degree")}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Título de los úlitmos estudios cursados"
                      placeholder="Placeholder"
                      fullWidth
                      multiline
                      type="text"
                      value={values.user.title}
                      onChange={values.handleChange("title")}
                      margin="normal"
                      variant="outlined"
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => values.updateUserById()}
                      size="small"
                      color="primary"
                    >
                      Guardar Cambios
                    </Button>
                    <ChangePropertyDialog
                      toChange="personalURL"
                      title="cambiar URL"
                      url={urlExample}
                      context={urlContext}
                    />
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            {/*<div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
                  </div>*/}
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserProfile;
