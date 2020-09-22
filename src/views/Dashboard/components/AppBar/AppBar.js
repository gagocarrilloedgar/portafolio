import React, { useContext } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Divider, Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./style";

import { MainBar, ButtonText, SearchBarProjects } from "common";
import { OpenContext, UserContext } from "hooks";

const DashboardBar = () => {
  const { t } = useTranslation();
  const { openDrawer, setDrawer } = useContext(OpenContext);
  const { logout } = useContext(UserContext);
  const classes = useStyles();

  return (
    <MainBar>
      <Grid item lg={1}>
        <IconButton
          edge="start"
          color="secondary"
          aria-label="open drawer"
          onClick={() => setDrawer(true)}
          className={clsx(
            classes.menuButton,
            openDrawer && classes.menuButtonHidden
          )}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item lg={2}>
        <ButtonText title={t("dashboard.appbar.logout")} action={logout} />
      </Grid>
    </MainBar>
  );
};

export default DashboardBar;
