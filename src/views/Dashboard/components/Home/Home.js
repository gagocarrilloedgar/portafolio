import React from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";

export const Home = () => {
  initializeGA();
  pageViewGA({ path: window.location.pathname + window.location.search });
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
    </React.Fragment>
  );
};
