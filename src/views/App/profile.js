import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { routerMain } from "../../providers/routes/router";
import DialogTitle from "../../components/views/qrProfile.component";
import VerticalLinearStepper from "../../components/views/cv.component";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a color="inherit" href="https://material-ui.com/">
        Diseñado para destacar, Portafolio
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 3),
    borderRadius: 10,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const url = window.location.pathname.split("/").pop();
    console.log(url);
    fetch(routerMain.userRouter.findByURL + url)
      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp[0]))
      .catch((err) => (window.location = "/404"));
  }, []);

  const montserratStyle = {
    fontFamily: `"Montserrat",sans-serif`,
  };
  
  console.log(currentUser);
  if (currentUser === null) {
    return <h1>LOADING</h1>;
  } else {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="xl">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  style={montserratStyle}
                  gutterBottom
                >
                  ¡Hola, soy {currentUser.username}!
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  color="textSecondary"
                  paragraph
                  style={montserratStyle}
                >
                  {currentUser.whoAmI}
                </Typography>
                <Grid container spacing={3} elevation={4}>
                  <Grid item sm={3}>
                    <Card className={classes.card} raised>
                      <CardMedia
                        className={classes.cardMedia}
                        image={currentUser.image}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          variant="h5"
                          component="h2"
                          gutterBottom
                          style={montserratStyle}
                        >
                          {currentUser.username}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="h2"
                          gutterBottom
                          style={montserratStyle}
                        >
                          {currentUser.degree}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          align="justify"
                          style={montserratStyle}
                          gutterBottom
                        >
                          {currentUser.email}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <DialogTitle />
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item key={classes.card} sm={9}>
                    <Card className={classes.card} raised>
                      <CardContent className={classes.cardContent}>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          align="left"
                          style={montserratStyle}
                        >
                          Universidad: {currentUser.university}
                        </Typography>

                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          align="left"
                          style={montserratStyle}
                        >
                          Quién soy
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          align="justify"
                          style={montserratStyle}
                        >
                          {currentUser.whoAmI}
                        </Typography>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          align="left"
                          style={montserratStyle}
                        >
                          Qué hago
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          align="justify"
                          style={montserratStyle}
                        >
                          {currentUser.what}
                        </Typography>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          align="left"
                          style={montserratStyle}
                        >
                          Actualmente busco
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          align="justify"
                          style={montserratStyle}
                        >
                          {currentUser.lookingFor}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <VerticalLinearStepper userId={currentUser._id} />
          </Container>
        </main>
        {/* Footer */}

        {/* End footer */}
      </React.Fragment>
    );
  }
};

export default UserProfile;
