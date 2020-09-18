import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, ButtonText, LogoButton, SearchBarProjects } from "common";
import { window } from "utils";

const LandingBar = () => {
  const { toRegister, toLogIn, toMain } = window();
  const { t } = useTranslation();
  return (
    <MainBar>
      <LogoButton action={toMain} />
      <ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      <ButtonText title={t("landing.buttons.register")} action={toRegister} />
    </MainBar>
  );
};

export default LandingBar;
