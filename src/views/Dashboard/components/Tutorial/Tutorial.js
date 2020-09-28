import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, TextField, Select, MenuItem
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { OpenContext } from "hooks";

export function TutorialDialog() {
  const [scroll, setScroll] = React.useState("paper");
  const { handleCloseFS, mainDialogOpen } = useContext(OpenContext);

  const { t } = useTranslation();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        fullWidth
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

            <Select
              style={{ margin: "20px" }}
              fullWidth
              value={age}
              onChange={handleChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select">
              <MenuItem value={10}>Digital Marketing</MenuItem>
              <MenuItem value={15}>Copywritting</MenuItem>
              <MenuItem value={20}>Web development</MenuItem>
              <MenuItem value={30}>Data science</MenuItem>
            </Select>

            <Typography align="left" variant="h5">
              {t("landing.hero.step2Title")}
            </Typography>
            <Select
              style={{ margin: "20px" }}
              fullWidth
              value={age}
              onChange={handleChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select">
              <MenuItem value={10}>Student</MenuItem>
              <MenuItem value={15}>Junior</MenuItem>
              <MenuItem value={20}>Senior</MenuItem>
              <MenuItem value={30}>Pro</MenuItem>
            </Select>

            <Typography align="left" variant="h5">
              {t("landing.hero.step3Title")}
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
