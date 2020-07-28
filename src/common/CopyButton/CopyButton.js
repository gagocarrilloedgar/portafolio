import React, { useContext } from "react";
import { UserContext } from "hooks";
import { ButtonContained } from "common";
import { useTranslation } from "react-i18next";

const CopyButton = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  const copy = () => {
    navigator.clipboard.writeText("https://portfol.io/" + user.personalURL);
  };

  return <ButtonContained action={copy} title={t("copy.buttons.url")} />;
};

export default CopyButton;
