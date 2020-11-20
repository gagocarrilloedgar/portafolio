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
import ChevronRightIcon from "@material-ui/icons/ChevronLeftOutlined";
import User from "@material-ui/icons/PersonOutlineRounded";
import Info from "@material-ui/icons/InfoOutlined";
import FormatListNumberedOutlinedIcon from "@material-ui/icons/FormatListNumberedOutlined";
import LaptopChromebookRoundedIcon from "@material-ui/icons/LaptopChromebookRounded";

import { Link } from "react-router-dom";
import { OpenContext, UserContext } from "hooks";
import { ContactButton, ButtonOutlined } from "common";
import { useTranslation } from "react-i18next";

export const BDrawer = () => {
  const classes = useStyles();
  const { openDrawer, setDrawer, setContact } = useContext(OpenContext);
  const { user, logout } = useContext(UserContext);

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
          <ChevronRightIcon color="primary"/>
        </IconButton>
      </div>
      <List>
        <div>
          <Link to="/app" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.dashboard")} />
            </ListItem>
          </Link>
          <Link to="/app/user" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <User color="primary" />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.profile")} />
            </ListItem>
          </Link>

          {
            <Link to="/app/work" className={classes.listItemText}>
              <ListItem
                button
                onClick={() => {
                  alert("Esta es la pantlla para poner las ligas");
                }}
              >
                <ListItemIcon>
                  <FormatListNumberedOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={t("dashboard.drawer.leagues")} />
              </ListItem>
            </Link>
          }
          <ListItem
            button
            onClick={() => {
              alert("Esta es la pantlla para poner cursos");
            }}
            className={classes.listItemText}
          >
            <ListItemIcon>
              <LaptopChromebookRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("dashboard.drawer.learn")} />
          </ListItem>
          <ContactButton>
            <ListItem
              className={classes.listItemText}
              button
              onClick={() => setContact(true)}
            >
              <ListItemIcon>
                <Info color="primary" />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.contact")} />
            </ListItem>
          </ContactButton>
          <ListItem>
            <ButtonOutlined
              title={t("dashboard.appbar.logout")}
              action={logout}
            />
            <ListItemText />
          </ListItem>
          {/*<Link to="/survey" className={classes.listItemText}>
            <ListItem button>
              <ListItemIcon>
                <Question />
              </ListItemIcon>
              <ListItemText primary={t("dashboard.drawer.survey")} />
            </ListItem>
    </Link>*/}
        </div>
      </List>
    </Drawer>
  );
};

export default BDrawer;
