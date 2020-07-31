import React, { useState, useContext } from "react";
import {
  TextField,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { ProjectContext } from "hooks";
import { TagsArray, ButtonOutlined } from "common";
import { useTranslation } from "react-i18next";

const fabStyle = {
  margin: 20,
  top: "auto",
  right: 20,
  borderRadius: 10,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

export default function AddProject() {
  const [open, setOpen] = useState(false);
  const { handleChange, addProject } = useContext(ProjectContext);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveProject = () => {
    addProject();
    setOpen(false);
  };

  return (
    <div>
      <Fab
        variant="contained"
        color="primary"
        size="medium"
        style={fabStyle}
        variant="extended"
        onClick={handleClickOpen}
      >
        <AddIcon />
        {t("dashboard.addproject.button")}
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {t("dashboard.addproject.dialogTitle")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("dashboard.addproject.dialogContent")}
          </DialogContentText>
          {/*<DialogContentText>
            {t("dashboard.addproject.recomentaion1")}
            {
              <a
                style={{ textDecoration: "none" }}
                href="https://unsplash.com/"
              >
                {"unsplash.com "}
              </a>
            }
            {t("dashboard.addproject.recomendation2")}
          </DialogContentText>*/}
          <TextField
            margin="normal"
            placeholder={t("dashboard.addproject.projectTitle")}
            onChange={handleChange("title")}
            label={t("dashboard.addproject.projectTitle")}
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="normal"
            placeholder={t("dashboard.addproject.projectDescription")}
            onChange={handleChange("description")}
            label={t("dashboard.addproject.projectDescription")}
            type="email"
            multiline
            variant="outlined"
            rows={2}
            fullWidth
          />
          {/*<TextField
            margin="normal"
            placeholder={t("dashboard.addproject.projectImage")}
            onChange={handleChange("urlimage")}
            label={t("dashboard.addproject.projectImage")}
            type="text"
            variant="outlined"
            fullWidth
          />*/}

          <TextField
            margin="normal"
            placeholder={t("dashboard.addproject.projectLink")}
            onChange={handleChange("projecturl")}
            label={t("dashboard.addproject.projectLink")}
            type="email"
            variant="outlined"
            fullWidth
          />
          <TagsArray />
        </DialogContent>
        <DialogActions>
          <ButtonOutlined
            action={handleClose}
            title={t("dashboard.addproject.close")}
          />
          <ButtonOutlined
            action={saveProject}
            title={t("dashboard.addproject.save")}
          />
          {/*<DropzoneDialogImage />*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}
