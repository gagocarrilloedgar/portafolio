import React, { useContext } from "react";
import useStyles from "./style";
import clsx from "clsx";

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import Question from "@material-ui/icons/QuestionAnswerOutlined";
import LayersIcon from "@material-ui/icons/LayersRounded";
import BrowserIcon from "@material-ui/icons/Web";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Public from "@material-ui/icons/OpenInBrowser";
import User from "@material-ui/icons/PersonOutlineRounded";
import Config from "@material-ui/icons/SettingsApplicationsOutlined";
import Info from "@material-ui/icons/InfoOutlined";

import { Link } from "react-router-dom";
import { OpenContext, UserContext } from "hooks";
import { ContactButton } from "common";
import { useTranslation } from "react-i18next";

export const DrawerMain = () => {
  const classes = useStyles();
  const { openDrawer, setDrawer, setContact } = useContext(OpenContext);
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  console.log(openDrawer);
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !openDrawer && classes.drawerPaperClose
        ),
      }}
      open={openDrawer}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        <div>
          <Link to="/app" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.dashboard")} />
            </ListItem>
          </Link>
          <Link to="/app/user" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <User />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.profile")} />
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
            onClick={() => window.open("/" + user.personalURL, "blank")}
          >
            <ListItemIcon>
              <Public />
            </ListItemIcon>
            <ListItemText primary={t("dashboard.drawer.preview")} />
          </ListItem>
          <Link to="/" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <BrowserIcon />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.main")} />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <Config />
            </ListItemIcon>
            <ListItemText primary={t("dashboard.drawer.config")} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary={t("dashboard.drawer.extensions")} />
          </ListItem>
          <ContactButton>
            <ListItem button onClick={() => setContact(true)}>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.contact")} />
            </ListItem>
          </ContactButton>
          <Link to="/survey" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <Question />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.survey")} />
            </ListItem>
          </Link>
        </div>
      </List>
    </Drawer>
  );
};

export default DrawerMain;
