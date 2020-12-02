import React from "react";
import { useTranslation } from "react-i18next";

import { HelmetMain } from "common";
import { HeroMain } from "../HeroMain";
const Landing = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      <HeroMain />
    </React.Fragment>
  );
};

export default Landing;
