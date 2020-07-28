import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";

import ReactGA from "react-ga";
import { ButtonOutlined, ButtonContained } from "common";
import { useTranslation } from "react-i18next";

export default function PremiumButton({ title }) {
  const [open, setOpen] = useState(false);
  const [premimText, setPremium] = useState("");
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePremium = () => {
    setPremium(t("dashboard.premium.title"));
    ReactGA.event({
      category: "Premium",
      action: "Premium button click",
      label: "plusone",
    });
  };

  return (
    <div>
      <ButtonOutlined title={title} action={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {t("dashboard.premium.dialogTitle")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography align="justify">
              {t("dashboard.premium.description")}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              small
              onClick={() => handlePremium()}
            >
              {t("dashboard.premium.update")}
            </Button>
            <Typography align="justify">{premimText}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonContained
            action={handleClose}
            title={t("dashboard.premium.close")}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
