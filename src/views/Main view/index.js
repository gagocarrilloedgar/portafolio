import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Button, Grid } from "@material-ui/core/";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Route, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import IndexMain from "./index.main";
import StickyFooter from "./footer";
import ContactButton from "./contact";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "80vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export const IndexView = () => {
  const classes = useStyles();
  return (
    <div className="main-page-background">
      <CssBaseline />
      <AppBar
        elevation={5}
        style={{ backgroundColor: "#b2dfdb" }}
        position="absolute"
      >
        <Toolbar className={classes.toolbar}>
          <Grid justify={"left"} container>
            <Grid item xs={1}>
              <Link to="" style={{ textDecoration: "none" }}>
                <Button>
                  <img width="25" src={logo} alt="logo" />
                  ortfolio
                </Button>
              </Link>
            </Grid>
            <Grid irem xs={8}></Grid>
            <Grid item>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button>Iniciar sesión</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button>Registro</Button>
              </Link>
            </Grid>
            <Grid item>
              <ContactButton />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Route path="/" component={IndexMain} />
        <iframe
          width="110%"
          height="800"
          src="https://drive.google.com/file/d/1oh0TDnWEQCuMVsbYVae2de3Cr4-O9Ziu/preview"
        ></iframe>
      </main>
    </div>
  );
};

export default IndexView;
