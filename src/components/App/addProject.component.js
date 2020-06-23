import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { UserContext } from "../../providers/user.provider";
import { ProjectContext } from "../../providers/project.provider";
import { DropzoneDialogImage } from "./addImage.component";

//import MaterialUIPickers from "./datePicker.component";

const style = {
  background: "#80cbc4",
  margin: 20,
  color: "black",
  top: "auto",
  right: 20,
  borderRadius: 10,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

export default function AddProject() {
  const [open, setOpen] = useState(false);
  const values = useContext(ProjectContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveProject = () => {
    values.addProject();
    setOpen(false);
  };
  const montserratStyle = {
    fontFamily: `"Montserrat",sans-serif`,
  };

  return (
    <div>
      <Fab
        style={style}
        size="medium"
        variant="extended"
        onClick={handleClickOpen}
      >
        <AddIcon />
        Añadir proyecto
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nuevo proyecto</DialogTitle>
        <DialogContent>
          <DialogContentText sytle={montserratStyle}>
            Para crear un nuevo proyecto solo tienes que elgir el tipo de imagen
            que quieres que se vea, añadir el título, el link dónde tienes tu
            proyecto guardado y descripción.
          </DialogContentText>
          <DialogContentText sytle={montserratStyle}>
            Te recomendamos
            {
              <a
                style={{ textDecoration: "none" }}
                href="https://unsplash.com/"
              >
                {" "}
                unsplash.com
              </a>
            }{" "}
            para elegir darle vida a tu proyecto. Son imágenes gratuitas y
            puedes encontrar de todo tipo
          </DialogContentText>
          <TextField
            sytle={montserratStyle}
            margin="normal"
            placeholder="Título del proyecto"
            onChange={values.handleChange("title")}
            id="name"
            label="Título del proyecto"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="normal"
            placeholder="Decripción del proyecto"
            onChange={values.handleChange("description")}
            id="name"
            label="Decripción del proyecto"
            type="email"
            multiline
            variant="outlined"
            rows={2}
            fullWidth
          />
          <TextField
            margin="normal"
            placeholder="Link de la imagen"
            onChange={values.handleChange("urlimage")}
            id="name"
            label="Link de la imagen"
            type="text"
            variant="outlined"
            fullWidth
          />

          <TextField
            margin="normal"
            placeholder="Link del proyecto"
            onChange={values.handleChange("projecturl")}
            id="name"
            label="Link del proyecto"
            type="email"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={saveProject}>Guardar</Button>
          {/*<DropzoneDialogImage />*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}
