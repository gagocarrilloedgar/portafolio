import React from "react";
import { Typography } from "@material-ui/core";

export const TypographyH6 = ({ text }) => {
  return (
    <Typography gutterBottom variant="h6" component="h2" align="justify">
      {text}
    </Typography>
  );
};

export const TypographyBody = ({ text }) => {
  return (
    <Typography gutterBottom multiline align="justify">
      {text}
    </Typography>
  );
};
