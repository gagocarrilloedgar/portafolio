import React from "react";
import { Container, Grid } from "@material-ui/core";

import useStyles from "./theme";

export const ProjectGrid = (props) => {
  const classes = useStyles();
  return (
    <Container  className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4} >
        {props.children}
      </Grid>
    </Container>
  );
};

export default ProjectGrid;
