import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";

import { UserContext } from "hooks";
import { useTranslation } from "react-i18next";
import { ButtonOutlined } from "common/buttons";
export default function ChangePropertyDialog({
  toChange,
  title,
  context,
  url,
}) {
  const [open, setOpen] = React.useState(false);
  const { error, setError, updatePersonalURL, handleChange } = useContext(
    UserContext
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (error === "Error") {
    } else {
      setOpen(false);
      setError("");
    }
  }, [error, setError]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  const savePicture = () => {
    updatePersonalURL();
  };

  return (
    <div>
      <ButtonOutlined title={title} action={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{context}</DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            placeholder={t("changeProperty.url.placeholder", { url })}
            onChange={handleChange(toChange)}
            multiline
            label={title}
            type="email"
            fullWidth
          />
          <Typography>{error}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={savePicture} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
