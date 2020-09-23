import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { ButtonContained } from "common/buttons";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { OpenContext } from "hooks";

export const DialogMain = (props) => {
  const { t } = useTranslation();
  const { mainDialogOpen } = useContext(OpenContext);

  return (
    <Dialog
      open={false}
      onClose={props.action}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <ButtonContained
          title={t("dialog.buttons.close")}
          action={props.action}
        />
      </DialogActions>
    </Dialog>
  );
};

export default DialogMain;
