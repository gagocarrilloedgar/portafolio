import React, { useContext } from "react";
import { OpenContext } from "hooks";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { ButtonOutlined } from "common/buttons";

export const InfoDialog = () => {
  const { open, setClose } = useContext(OpenContext);
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={() => setClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {t("landing.login.errorTitle")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t("landing.login.errorDescription")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonOutlined
          action={setClose}
          title={t("landing.login.closeDialog")}
        />
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
