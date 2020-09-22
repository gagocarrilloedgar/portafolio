import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen("paper")}
        variant="contained"
        className="bluebutton"
        style={{
          margin: "12px",
          backgroundColor: "white",
          fontSize: "16px",
          color: "#2255ff",
          fontFamily: "Fira Sans",
          borderRadius: 40,
        }}
      >
        {t("landing.hero.how")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
            onClick={handleClose}
            color="primary"
          >
            {t("landing.hero.close")}
          </Button>
          <Button
            style={{
              margin: "5px",
              backgroundColor: "#2255ff",
              fontSize: "12px",
              color: "white",
              fontFamily: "Fira Sans",
              borderRadius: 40,
            }}
            onClick={() =>
              window.open("https://edgargcupc.typeform.com/to/u3E6v9Hy")
            }
            color="primary"
          >
            {t("landing.hero.startBtn")}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
