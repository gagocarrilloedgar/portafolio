import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Drawer, Button } from "@material-ui/core/";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import User from "@material-ui/icons/PersonOutlineRounded";
import Public from "@material-ui/icons/OpenInBrowser";
import LayersIcon from "@material-ui/icons/LayersRounded";
import Config from "@material-ui/icons/SettingsApplicationsOutlined";
import BrowserIcon from "@material-ui/icons/Web";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Route, Link, Switch } from "react-router-dom";
import WorkOutline from "@material-ui/icons/WorkOutline";

import ProjectsGrid from "../../components/App/cardGrid.component";
import UserProfile from "../../components/App/profile.component";
import { UserContext } from "../../providers/user.provider";
import AddProject from "../../components/App/addProject.component";
import { getJWT, localStorageDB } from "../../providers/helpers/jwt";
import ContactIconButton from "../../components/App/contact.component";
import { EditExperiencia } from "../../components/App/editExp.component";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: "https://source.unsplash.com/1600x900/?abstract",
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
    background: "white",
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
    height: "100vh",
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

const listItemText = {
  fontFamily: `"Montserrat",sans-serif`,
  textDecoration: "none",
  color: "black",
};

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const userProvider = useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!getJWT(localStorageDB.token)) {
      window.location = "/";
    }
  }, []);

  return (
    <div className="background-dashboard">
      <CssBaseline />
      <AppBar
        elevation={4}
        color="default"
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <Button onClick={userProvider.logout}> Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <div>
            <Link to="/app" style={listItemText}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/app/user" style={listItemText}>
              <ListItem button>
                <ListItemIcon>
                  <User />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItem>
            </Link>
            {/*<Link to="/app/work">
              <ListItem button>
                <ListItemIcon>
                  <WorkOutline />
                </ListItemIcon>
                <ListItemText primary="Experiencia" />
              </ListItem>
      </Link>*/}
            <ListItem
              button
              onClick={() =>
                window.open("/" + userProvider.user.personalURL, "blank")
              }
            >
              <ListItemIcon>
                <Public />
              </ListItemIcon>
              <ListItemText primary="Vista previa" />
            </ListItem>
            <Link to="/" style={listItemText}>
              <ListItem button>
                <ListItemIcon>
                  <BrowserIcon />
                </ListItemIcon>
                <ListItemText primary="Página princial" />
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <Config />
              </ListItemIcon>
              <ListItemText primary="Configuración" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Extensiones" />
            </ListItem>
            <ContactIconButton />
          </div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path="/app/user" component={UserProfile} />
          {/*<Route path="/app/work" component={EditExperiencia} />*/}
          <Route exact path="/app" component={ProjectsGrid} />
        </Switch>
        <AddProject />
      </main>
    </div>
  );
};

export default Dashboard;
