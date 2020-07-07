import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core/";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../../assets/logo.png";
import ContactButton from "../../Main view/contact";
import { Link } from "wouter";
import { SearchBarProjects } from "../../../components/App/searchBar.component";

const useStyles = makeStyles(() => ({
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
      style={{ backgroundColor: "white", width: "100%", display: "flex" }}
    >
      <Toolbar>
        <Grid container>
          <Link to="" style={{ textDecoration: "none" }}>
            <Button small className={classes.buttonStyle}>
              <img width="23" src={logo} alt="logo" />
              ortfolio
            </Button>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button small className={classes.buttonStyle}>
              Iniciar sesión
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button small className={classes.buttonStyle}>
              Registro
            </Button>
          </Link>
          <ContactButton />
          <Grid item xs={5}></Grid>
          <SearchBarProjects />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarIndex;
