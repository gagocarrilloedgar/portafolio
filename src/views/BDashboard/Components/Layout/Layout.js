import React from "react";
import { HelmetMain } from "common";
import { CssBaseline } from "@material-ui/core";

export const Layout = (props) => {
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
