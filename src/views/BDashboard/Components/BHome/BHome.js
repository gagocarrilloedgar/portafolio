import React from "react";
import { HelmetMain, ProjectGrid } from "common";
import { useTranslation } from "react-i18next";
import { initializeGA } from "utils";

export const BHome = () => {
  initializeGA();
  /*pageViewGA({ path: window.location.pathname + window.location.search });*/
  const { t } = useTranslation();


  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
      <ProjectGrid>

      </ProjectGrid>
    </React.Fragment>
  );
};
