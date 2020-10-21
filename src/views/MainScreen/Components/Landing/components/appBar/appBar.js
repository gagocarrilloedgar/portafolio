import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, LogoButton } from "common";
import { buttonEventGA, window } from "utils";
import { Button } from "@material-ui/core";

const LandingBar = () => {
  const { toMain, toBusiness } = window();
  const { t } = useTranslation();

  const contactAction = () => {
    buttonEventGA({ category: "landing", action: "ToBusiness", label: "appbar" });
    toBusiness();
  }

  return (
    <MainBar>
      <LogoButton action={toMain} />
      <Button style={{ backgroundColor: "#2255ff", color: "white", width: "200px", height:"40px", margin:"10px" }} onClick={contactAction}>{t("landing.hero.contact")}</Button>
      {/*<ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      <ButtonText title={t("landing.buttons.register")} action={toRegister} />
  <SearchBarProjects >*/}
    </MainBar>
  );
};

export default LandingBar;
