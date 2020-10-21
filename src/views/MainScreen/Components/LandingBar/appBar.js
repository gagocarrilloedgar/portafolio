import React from "react";

import { MainBar, LogoButton } from "common";
import { window } from "utils";

const LandingBar = () => {
  const { toMain } = window();



  return (
    <MainBar>
      <LogoButton action={toMain} />
      {/*<ButtonText title={t("landing.buttons.login")} action={toLogIn} />
      <ButtonText title={t("landing.buttons.register")} action={toRegister} />
  <SearchBarProjects >*/}
    </MainBar>
  );
};

export default LandingBar;
