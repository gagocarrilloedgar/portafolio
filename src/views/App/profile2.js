import React, { useState, useEffect, useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { routerMain } from "../../providers/routes/router";
import DialogTitle from "../../components/views/qrProfile.component";
import VerticalLinearStepper from "../../components/views/projectsGrid.component";
import { Collapse, Button } from "@material-ui/core";
import { ProjectContext } from "../../providers/project.provider";
import { ViewTagsArray } from "../../components/App/editTags.component";
import ShareProfile from "../../components/views/share.component";

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
    borderRadius: 5,
  },
  cardMedia: {
    margin: "50px",
    paddingTop: "75%",
    borderRadius: "50%", // 16:9
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
  const projectProvider = useContext(ProjectContext);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const url = window.location.pathname.split("/").pop();
    console.log(url);
    fetch(routerMain.userRouter.findByURL + url)
      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp[0]))
      .catch((err) => (window.location = "/404"));
  }, []);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

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
        <div className="wrapper">
          <main className={classes.content}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              className="backContent"
            >
              <Grid item xs={3}>
                <Card className={classes.card} style={{ marginTop: "30px" }}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={currentUser.image}
                    title="Image title"
                  />
                  <CardContent>
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
                      variant="overline"
                      textAlign="left"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Contacto
                    </Typography>

                    <Typography
                      variant="body2"
                      align="justify"
                      style={montserratStyle}
                      gutterBottom
                    >
                      Correo: {currentUser.email}
                    </Typography>

                    <Typography
                      variant="overline"
                      textAlign="left"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Sobre mi
                    </Typography>

                    <Typography
                      align="justify"
                      style={montserratStyle}
                      gutterBottom
                    >
                      {currentUser.whoAmI}
                    </Typography>
                    <Typography
                      variant="overline"
                      textAlign="left"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Skills
                    </Typography>

                    <Collapse in={checked} collapsedHeight={100}>
                      <ViewTagsArray tags={projectProvider.getTags()} />
                    </Collapse>
                    <Typography>
                      {" "}
                      <Button
                        color="primary"
                        small
                        style={{ fontSize: 12 }}
                        onClick={() => handleChange()}
                      >
                        ver más skills
                      </Button>
                    </Typography>

                    <Typography
                      variant="overline"
                      textAlign="left"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Experiencia
                    </Typography>
                    <Typography
                      variant="body2"
                      align="justify"
                      style={montserratStyle}
                      gutterBottom
                    >
                      {currentUser.what}
                    </Typography>
                    <Typography
                      variant="overline"
                      textAlign="left"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Estudios
                    </Typography>

                    <Typography
                      variant="body2"
                      align="justify"
                      style={montserratStyle}
                      gutterBottom
                    >
                      {currentUser.university}
                      <br></br>
                      <br></br>
                      {currentUser.degree}
                    </Typography>

                    <Typography
                      variant="overline"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Actualmente
                    </Typography>

                    <Typography
                      variant="body2"
                      align="justify"
                      style={montserratStyle}
                      gutterBottom
                    >
                      {currentUser.lookingFor}
                    </Typography>
                    <Typography
                      variant="overline"
                      style={montserratStyle}
                      style={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Compartir perfil
                    </Typography>
                    <ShareProfile />
                  </CardContent>
                  <CardActions>
                    <DialogTitle url={window.location.href} />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item sm={9} style={{ marginTop: "150px", padding: "10px" }}>
                <VerticalLinearStepper userId={currentUser._id} />
              </Grid>
            </Grid>
          </main>
        </div>
        {/* Footer */}
        {/* End footer */}
      </React.Fragment>
    );
  }
};

export default UserProfile;
