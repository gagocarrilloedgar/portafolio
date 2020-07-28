import React from "react";
import { CardHeader, IconButton, Tooltip } from "@material-ui/core";
import { AvatarPhoto } from "common";
import ViewArrow from "@material-ui/icons/ArrowForward";
import { useTranslation } from "react-i18next";

const CardHeaderInfo = ({ image, title, toClick, subheader }) => {
  const { t } = useTranslation();
  return (
    <CardHeader
      style={{ textAlign: "left" }}
      avatar={<AvatarPhoto image={image} />}
      title={title}
      subheader={subheader}
      action={
        <Tooltip title={t("infocard.tooltip.title")}>
          <IconButton onClick={() => toClick()}>
            <ViewArrow />
          </IconButton>
        </Tooltip>
      }
    />
  );
};

export default CardHeaderInfo;
