import React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { UserContext } from "../../providers/user.provider";
import { useContext } from "react";

const CopyPersonalURL = () => {
  const userProvider = useContext(UserContext);

  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(
          "https://portfol.io/" + userProvider.user.personalURL
        );
      }}
      color="primary"
      variant="contained"
    >
      {"Copiar URL"}
    </Button>
  );
};

export default CopyPersonalURL;
