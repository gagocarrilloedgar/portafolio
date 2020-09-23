import React from "react";
import Button from "@material-ui/core/Button";
import logoWhite from "./assets/logoWhite.png";
import logo from "./assets/logo.png";
import useStyles from "./style";
const styleButton = { margin: "5px" };

export const ButtonContained = ({ title, action }) => {
  const classes = useStyles();
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={() => action()}
      className={classes.textStyle}
    >
      {title}
    </Button>
  );
};

export const ButtonOutlined = ({ title, action }) => {
  const classes = useStyles();
  return (
    <Button
      xs={10}
      sm={6}
      lg={3}
      xl={3}
      size="small"
      variant="outlined"
      color="primary"
      className={classes.textStyle}
      onClick={() => action()}
    >
      {title}
    </Button>
  );
};

export const ButtonText = ({ title, action }) => {
  const classes = useStyles();
  return (
    <Button
      size="small"
      variant="text"
      color="ink"
      onClick={() => action()}
      className={classes.textStyle}
    >
      {title}
    </Button>
  );
};

export const ButtonTextBlack = ({ title, action }) => {
  const classes = useStyles();
  return (
    <Button
      size="small"
      variant="text"
      color="blue"
      className={classes.textStyle}
      onClick={() => action()}
    >
      {title}
    </Button>
  );
};

export const LogoButton = ({ action }) => {
  return (
    <Button
      size="small"
      variant="text"
      color="secondary"
      onClick={() => action()}
    >
      <img src={logo} width="50px" alt="pportfolio" />
    </Button>
  );
};

export default ButtonContained;
