import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, LogoButton } from "common";
import { buttonEventGA, window } from "utils";
import { Button } from "@material-ui/core";

const LandingBar = () => {
  const { toMain, toContact } = window();
  const { t } = useTranslation();

  const contactAction = () => {
    buttonEventGA({ category: "landing", action: "contact", label: "appbar" });
    toContact();
  }


  return (
    <MainBar>
      <LogoButton action={toMain} />
      <Button onClick={contactAction}>{t("landing.hero.contact")}</Button>
      {/*<ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      <ButtonText title={t("landing.buttons.register")} action={toRegister} />
  <SearchBarProjects >*/}
    </MainBar>
  );
};

export default LandingBar;
