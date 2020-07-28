import React from "react";
import { ButtonOutlined } from "common";
import { useTranslation } from "react-i18next";
import { window } from "utils";

const { toProject } = window();

export const ButtonProject = ({ url }) => {
  const goToProject = () => toProject(url);
  const { t } = useTranslation();
  
  return (
    <ButtonOutlined
      title={t("infocard.button.viewproject")}
      action={goToProject}
    />
  );
};
