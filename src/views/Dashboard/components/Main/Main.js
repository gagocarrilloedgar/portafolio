import React from "react";
import useStyles from "./style";
export const Main = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}>{props.children}</div>
      </main>
    </React.Fragment>
  );
};

export default Main;
