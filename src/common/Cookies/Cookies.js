import React from "react";
import MUICookieConsent from "material-ui-cookie-consent";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const CookiesPolicy = () => {
  const { t } = useTranslation();
  return (
    <MUICookieConsent
      acceptButtonLabel={t("privacy.cookies.button")}
      cookieName="mySiteCookieConsent"
      message={<CookiesMessage />}
    />
  );
};

export default CookiesPolicy;

export const CookiesMessage = () => {
  const { t } = useTranslation();
  const text =
    t("privacy.cookies.text1") +
    t("privacy.cookies.text2") +
    t("privacy.cookies.text3") +
    t("privacy.cookies.text4");
  return (
    <Typography
      align="justify"
      style={{ fontFamily: `"Montserrat", sans-serif` }}
    >
      {text}
    </Typography>
  );
};
