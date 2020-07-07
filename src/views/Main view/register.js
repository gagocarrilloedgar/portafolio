import React, { useState, useContext } from "react";
import { UserContext } from "../../providers/user.provider";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { GoogleLogin } from "react-google-login";
import { TextField, Typography, Grid, CssBaseline } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import AppBarIndex from "../Landing/components/AppBar";
import PrivacyPolicy from "../../components/views/privacyPolicy.component";
import CookiesPolicy from "../../components/views/cookies.component";

const loginStyle = {
  background: "#2196f3",
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
    padding: 20,
  },
  textField: {
    fontFamily: `"Montserrat",sans-serif`,
  },

  cardContent: {
    flexGrow: 1,
  },
}));

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userProvider = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      email: email,
      preonsalURL: uuidv4(),
    };
    console.log(user);
    await userProvider.register(user);
  };

  const responseGoogle = (response) => {
    userProvider.googleLogin(response, 0);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBarIndex />
      <CssBaseline />
      <Grid className="auth-wrapper">
        <Grid item>
          <Card className="auth-inner" raised>
            <form onSubmit={onSubmit} validate>
              <Typography
                style={{ fontFamily: "Montserrat" }}
                variant="h3"
                gutterBottom
              >
                Crea tu cuenta
              </Typography>
              <CardContent>
                <TextField
                  margin="dense"
                  id="name"
                  label="Nombre"
                  fullWidth
                  style={{ fontFamily: "Montserrat" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Correo"
                  type="email"
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

                <PrivacyPolicy />
                <form
                  action="#"
                  onsubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Porfavor marque la casilla de que ha leido y aceptado la politica de privacidad'); return false; }"
                >
                  <input
                    type="checkbox"
                    name="chec kbox"
                    value="check"
                    id="agree"
                  />{" "}
                  He leido y acepto las politicas de privacidad
                </form>

                <Button  style={{marginTop:"5px"}} color="primary" type="submit" variant="contained">
                  ¡Quiero empezar ya!
                </Button>
                <p className="text-center">O inicia sesión con google</p>
                <GoogleLogin
                  clientId="217347035627-8tum50egnftfbtgauvbrj7rgj7ovjrdu.apps.googleusercontent.com"
                  buttonText="Entrar con Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </CardContent>

              <p className="forgot-password text-right">
                ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
              </p>
            </form>
          </Card>
          <Dialog
            open={userProvider.openRegister}
            onClose={() =>
              userProvider.setOpenRegister((openRegister) => !openRegister)
            }
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
                onClick={() =>
                  userProvider.setOpenRegister((openRegister) => !openRegister)
                }
                color="primary"
              >
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <CookiesPolicy />
      </Grid>
    </React.Fragment>
  );
};

export default Register;
