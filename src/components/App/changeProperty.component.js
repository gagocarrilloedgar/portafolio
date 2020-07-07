import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { UserContext } from "../../providers/user.provider";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";

export default function ChangePropertyDialog({
  toChange,
  title,
  context,
  url,
}) {
  const [open, setOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = useState("");
  const values = useContext(UserContext);

  useEffect(() => {
    if (values.error === "Error") {
      console.log("error 2");
    } else {
      setOpen(false);
      values.setError("");
    }
  }, [values.error]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    values.setError("");
  };

  const savePicture = () => {
    values.updatePersonalURL();
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        {title}
      </Button>
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
            placeholder={"ejemplo: " + url}
            onChange={values.handleChange(toChange)}
            id="name"
            multiline
            label={title}
            type="email"
            fullWidth
          />
          <Typography>{values.error}</Typography>
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
