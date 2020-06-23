import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { UserContext } from "../../providers/user.provider";

export default function ChangePropertyDialog({
  toChange,
  title,
  context,
  url,
}) {
  const [open, setOpen] = React.useState(false);

  const values = useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const savePicture = () => {
    setOpen(false);
    values.updateUserById();
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={savePicture} color="primary">
            Gurdar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
