import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { OpenContext } from "hooks";

export function TutorialDialog() {
  const [scroll, setScroll] = React.useState("paper");
  const { handleCloseFS, mainDialogOpen } = useContext(OpenContext);

  const { t } = useTranslation();

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (mainDialogOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [mainDialogOpen]);

  return (
    <React.Fragment>
      <Dialog
        open={mainDialogOpen}
        onClose={handleCloseFS}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {t("landing.hero.how")}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography align="left" variant="h5">
              {t("landing.hero.step1Title")}
            </Typography>
            <Typography align="left">
              {t("landing.hero.step1subtitle")}
            </Typography>
            <Typography align="left" variant="h5">
              {t("landing.hero.step2Title")}
            </Typography>
            <Typography align="left">
              {t("landing.hero.step2subtitle")}
            </Typography>
            <Typography align="left" variant="h5">
              {t("landing.hero.step3Title")}
            </Typography>
            <Typography align="left">
              {t("landing.hero.step3subtitle")}
            </Typography>
            <Typography align="left" variant="h5">
              {t("landing.hero.step4Title")}
            </Typography>
            <Typography align="left">
              {t("landing.hero.step4subtitle")}
            </Typography>
            <Typography align="left" variant="h5">
              {t("landing.hero.step5Title")}
            </Typography>
            <Typography align="left">
              {t("landing.hero.step5subtitle")}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ borderRadius: 40 }}
            onClick={handleCloseFS}
            color="primary"
          >
            {t("landing.hero.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
