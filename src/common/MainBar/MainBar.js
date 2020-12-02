import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
const MainBar = (props) => {
  return (
    <AppBar
      elevation={0}
      color="transparent"
      style={{
        width: "100%",
        display: "flex",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Toolbar>
        <Grid container justify="space-between">
          {props.children}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;
