import React from "react";
import Button from "@material-ui/core/Button";
import logoWhite from "./assets/logoWhite.png";

const styleButton = { margin: "5px" };

export const ButtonContained = ({ title, action }) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={() => action()}
      style={styleButton}
    >
      {title}
    </Button>
  );
};

export const ButtonOutlined = ({ title, action }) => {
  return (
    <Button
      size="small"
      variant="outlined"
      style={styleButton}
      onClick={() => action()}
    >
      {title}
    </Button>
  );
};

export const ButtonText = ({ title, action }) => {
  return (
    <Button
      size="small"
      variant="text"
      color="secondary"
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
      <img src={logoWhite} width="100px" alt="logo" />
    </Button>
  );
};

export default ButtonContained;
