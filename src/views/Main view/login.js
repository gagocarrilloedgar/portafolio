import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../providers/user.provider";
import { ProjectContext } from "../../providers/project.provider";
import { getJWT, localStorageDB } from "../../providers/helpers/jwt";
//Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { GoogleLogin } from "react-google-login";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Grid, CssBaseline } from "@material-ui/core";
import AppBarIndex from "../Landing/components/AppBar";
import CookiesPolicy from "../../components/views/cookies.component";
import { Helmet } from "react-helmet";


const style = {
  background: "#80cbc4",
  color: "white",
  marginTop: "50px",
};

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
    padding: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  textField: {
    fontFamily: `"Montserrat",sans-serif`,
  },

  cardContent: {
    flexGrow: 1,
  },
}));

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userProvider = useContext(UserContext);
  const projectProvider = useContext(ProjectContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("onSubmit");
    const user = {
      email: email,
      password: password,
    };

    await userProvider.login(user);
    await projectProvider.getUserProjects;
  };

  const responseGoogle = (response) => {
    userProvider.googleLogin(response, 1);
  };

  useEffect(() => {
    if (getJWT(localStorageDB.token)) {
      window.location = "/app";
    }
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <title>Portfolio || Login </title>
      </Helmet>
      <AppBarIndex />
      <Grid className="auth-wrapper">
        <CssBaseline />
        <Grid item>
          <Card className="auth-inner-login" raised>
            <form onSubmit={onSubmit}>
              <Typography
                style={{ fontFamily: "Montserrat" }}
                variant="h3"
                gutterBottom
                className="phoneTitle"
              >
                ¡HOLA!
              </Typography>
              <TextField
                margin="dense"
                id="name"
                label="Correo"
                type="text"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />
              <TextField
                margin="dense"
                id="name"
                label="Contraseña"
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
                Iniciar sesión
              </Button>
              <p className="text-center">O inicia sesión con google</p>

              <GoogleLogin
                clientId="217347035627-8tum50egnftfbtgauvbrj7rgj7ovjrdu.apps.googleusercontent.com"
                buttonText="Entrar con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <p className="forgot-password text-right">
                ¿Todavía no tienes cuenta? <a href="/register">Regístrate</a>
              </p>
            </form>
          </Card>
        </Grid>
        <Dialog
          open={userProvider.open}
          onClose={() => userProvider.setOpen((open) => !open)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Ups, algo ha ido mal.
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Es posible que algo de tu correo o contraseña esté mal.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => userProvider.setOpen((open) => !open)}
              color="primary"
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <CookiesPolicy />
    </React.Fragment>
  );
};

export default Login;
