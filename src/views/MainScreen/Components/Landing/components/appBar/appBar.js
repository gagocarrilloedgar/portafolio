import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, LogoButton, ButtonText } from "common";
import { buttonEventGA, window } from "utils";
import { Button, Grid} from "@material-ui/core";

const LandingBar = () => {
  const { toMain, toBusiness, toLogIn } = window();
  const { t } = useTranslation();

  const contactAction = () => {
    buttonEventGA({ category: "landing", action: "ToBusiness", label: "appbar" });
    toBusiness();
  }

  return (
    <MainBar>
      <LogoButton action={toMain} />
      <Grid item lg={8} sm={4} xs={1}>

      </Grid>
      <Button style={{ backgroundColor: "#2255ff", color: "white", width: "200px", height: "40px", margin: "10px" }} onClick={contactAction}>{t("landing.hero.contact")}</Button>
      <ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      {/*<ButtonText title={t("landing.buttons.register")} action={toRegister} />
  <SearchBarProjects >*/}
    </MainBar>
  );
};

export default LandingBar;
