import React from "react";

import { MainBar, LogoButton, ButtonText } from "common";
import { window } from "utils";
import { useTranslation } from "react-i18next";
import { Grid} from "@material-ui/core";
const LandingBar = () => {
  const { toMain, toLogIn } = window();
  const { t } = useTranslation();

  return (
    <MainBar>
      <LogoButton action={toMain} />
      <Grid item lg={10} sm={6} xs={1}>

      </Grid>
      <ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      {/*<ButtonText title={t("landing.buttons.register")} action={toRegister} />*/}
    </MainBar>
  );
};

export default LandingBar;
