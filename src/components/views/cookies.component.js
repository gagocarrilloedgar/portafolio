import React from "react";
import MUICookieConsent from "material-ui-cookie-consent";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "teal",
  },
}));

export const CookiesPolicy = () => {
  const classes = useStyles();
  return (
    <MUICookieConsent
      className={classes.dialog}
      acceptButtonLabel="Aceptar"
      cookieName="mySiteCookieConsent"
      componentType="Dialog" // default value is Snackbar
      message={<CookiesMessage />}
    />
  );
};

export default CookiesPolicy;

export const CookiesMessage = () => {
  return (
    <Typography
      align="justify"
      style={{ fontFamily: `"Montserrat", sans-serif` }}
    >
      En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de
      11 de julio, de Servicios de la Sociedad de la Información y de Comercio
      Electrónico, esta página web le informa, en esta sección, sobre la
      política de recogida y tratamiento de cookies."
    </Typography>
  );
};
