import React from "react";
import { useTranslation } from "react-i18next";
import { window } from "utils";
import { ButtonTextBlack } from "common";

const { toProject } = window();

export const ButtonProject = ({ url }) => {
  const goToProject = () => toProject(url);
  const { t } = useTranslation();
  
  return (
    <ButtonTextBlack
      title={t("infocard.button.viewproject")}
      action={goToProject}
    />
  );
};
