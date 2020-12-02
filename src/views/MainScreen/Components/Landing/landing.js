import React from "react";
import { useTranslation } from "react-i18next";

import { HelmetMain } from "common";
const Landing = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HelmetMain title={t("landing.helmet.title")} />
      
    </React.Fragment>
  );
};

export default Landing;
