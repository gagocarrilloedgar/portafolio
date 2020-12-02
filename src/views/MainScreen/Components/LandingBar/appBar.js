import React from "react";

import { MainBar, LogoButton, ButtonOutlinedWhite } from "common";
import { window } from "utils";
import { useTranslation } from "react-i18next";
import { Grid } from "@material-ui/core";
const LandingBar = () => {
  const { toMain, toLogIn } = window();
  const { t } = useTranslation();

  return (
    <MainBar>
      <LogoButton action={toMain} />
      <Grid item lg={8} sm={6} xs={1}>
      </Grid>
      <ButtonOutlinedWhite title={t("landing.buttons.login")} action={toLogIn} />
    </MainBar>
  );
};

export default LandingBar;
