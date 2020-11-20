import React from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@material-ui/core";

export const Layout = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="background-dash">
        <HelmetMain title={"Business"} />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
