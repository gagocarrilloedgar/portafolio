import React from "react";
import { Avatar } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const AvatarPhoto = ({ image }) => {
  const { t } = useTranslation();
  return (
    <Avatar>
      <img width="40px" alt={t("infocard.avatar.alt")} src={image} />
    </Avatar>
  );
};

export default AvatarPhoto;
