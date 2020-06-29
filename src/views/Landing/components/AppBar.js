import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core/";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import ContactButton from "../../Main view/contact";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  buttonStyle: {
    fontSize: "11px",
  },
}));

const AppBarIndex = () => {
  const classes = useStyles();
  return (
    <AppBar
      elevation={2}
      style={{ backgroundColor: "white", width:"100%", display:"flex"}}
    >
      <Toolbar>
        <Grid justify={"left"} container>
          <Grid item xs={1} justify="center">
            <Link to="" style={{ textDecoration: "none" }}>
              <Button small className={classes.buttonStyle}>
                <img width="23" src={logo} alt="logo" />
                ortfolio
              </Button>
            </Link>
          </Grid>
          <Grid irem xs={8}></Grid>
          <Grid item>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button small className={classes.buttonStyle}>
                Iniciar sesión
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button small className={classes.buttonStyle}>
                Registro
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <ContactButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarIndex;
