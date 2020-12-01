import React, { useContext } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Divider, Grid, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./style";

import { MainBar, ButtonOutlined, ButtonText } from "common";
import { window } from "utils";
import { OpenContext, UserContext } from "hooks";

const DashboardBar = () => {
  const { t } = useTranslation();
  const { openDrawer, setDrawer, setContact } = useContext(OpenContext);
  const { logout } = useContext(UserContext);
  const { toApp, toUser, toLearn, toLeagues } = window();
  const classes = useStyles();

  const contact = () => setContact(true);

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
            <ButtonText
              title={t("dashboard.drawer.dashboard")}
              action={toApp}
            />
            <ButtonText title={t("dashboard.drawer.profile")} action={toUser} />
            <ButtonText
              title={"Parrilla"}
              action={toLeagues}
            />
            <ButtonText title={"Academy"} action={toLearn} />
            <ButtonText
              title={t("dashboard.drawer.contact")}
              action={contact}
            />
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

export default DashboardBar;
