import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, LogoButton } from "common";
import { window } from "utils";
import { Button } from "@material-ui/core";

const LandingBar = () => {
  const { toRegister, toLogIn, toMain, toContact } = window();
  const { t } = useTranslation();
  return (
    <MainBar>
      <LogoButton action={toMain} />
      <Button onClick={toContact}>{"contact "}</Button>
      {/*<ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      <ButtonText title={t("landing.buttons.register")} action={toRegister} />
  <SearchBarProjects >*/}
    </MainBar>
  );
};

export default LandingBar;
