import React, { useContext } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Divider, Grid, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./style";

import { MainBar, ButtonOutlined, ButtonText } from "common";
import { OpenContext, UserContext } from "hooks";
import { window } from "utils";

const BDashboardBar = () => {
  const { t } = useTranslation();
  const { openDrawer, setDrawer } = useContext(OpenContext);
  const { logout } = useContext(UserContext);
  const classes = useStyles();
  const { toBusinessApp } = window();

  return (
    <MainBar>
      <Grid container justify="flex-end">
        <Hidden smUp>
          <Grid item className="drawerIcon">
            <IconButton
              edge="start"
              color="primary"
              aria-label="open drawer"
              onClick={() => setDrawer(true)}
              className={clsx(
                classes.menuButton,
                openDrawer && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item>
            <ButtonText title={t("dashboard.drawer.dashboard")} action={toBusinessApp} />
            <ButtonText title={t("Perfiles")} />
            <ButtonText title={t("Ranking global")} />
            <ButtonText title={t("Mi empresa")} />
          </Grid>
          <Divider light="false" orientation="vertical" variant="middle" />
          <Grid item>
            <ButtonOutlined
              title={t("dashboard.appbar.logout")}
              action={logout}
            />
          </Grid>
        </Hidden>
      </Grid>
    </MainBar>
  );
};

export default BDashboardBar;
