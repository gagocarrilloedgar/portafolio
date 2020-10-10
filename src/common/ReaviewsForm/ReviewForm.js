import React, { useContext } from "react";
import {
  TextField,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import { ProjectContext } from "hooks";

import {
  ButtonContained,
  ButtonOutlined,
  TagsArray,
  ButtonTextBlack,
} from "common";
import { useTranslation } from "react-i18next";

export default function ReviewForm(props) {
  const [open, setOpen] = React.useState(false);
  const { projects, handleChange, updateFoundProject } = useContext(
    ProjectContext
  );
  const { t } = useTranslation();
  const card = props.value;
  let index = projects.findIndex((project) => project._id === card._id);
  //console.log("found id: " + index);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveProject = () => {
    updateFoundProject(card, index);
    setOpen(false);
  };

  return (
    <div>
      <ButtonTextBlack
        title={t("dashboard.editProject.title")}
        action={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {t("dashboard.editProject.title")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("dashboard.editProject.contentText")}
          </DialogContentText>
          <TextField
            margin="normal"
            placeholder={card.title}
            onChange={handleChange("title")}
            label={t("dashboard.editProject.projectTitle")}
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="normal"
            placeholder={card.description}
            onChange={handleChange("description")}
            id="name"
            label={t("dashboard.editProject.projectDescription")}
            type="email"
            multiline
            variant="outlined"
            rows={2}
            fullWidth
          />
          {/* <TextField
            margin="normal"
            placeholder={card.urlimage}
            onChange={handleChange("urlimage")}
            id="name"
            label={t("dashboard.editProject.projectImage")}
            type="email"
            variant="outlined"
            fullWidth
         />*/}
          <TextField
            margin="normal"
            placeholder={card.projecturl}
            onChange={handleChange("projecturl")}
            id="name"
            label={t("dashboard.editProject.projectLink")}
            type="email"
            variant="outlined"
            fullWidth
          />
          <TagsArray />
        </DialogContent>
        <DialogActions>
          <ButtonOutlined
            action={handleClose}
            title={t("dashboard.editProject.close")}
          />
          <ButtonContained
            action={saveProject}
            title={t("dashboard.editProject.save")}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
