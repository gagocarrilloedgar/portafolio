import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useTranslation } from "react-i18next";
import { UserContext } from "hooks";

export const GoogleLogIn = () => {
  const { t } = useTranslation();
  const { googleLogin } = useContext(UserContext);

  const responseGoogle = (response) => {
    googleLogin(response, 1);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API}
      buttonText={t("landing.login.googleLogin")}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogIn;
