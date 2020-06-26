import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { ProjectContext } from "../../providers/project.provider";
import TagsArray from "./editTags.component";

export default function UpdateProject(props) {
  const [open, setOpen] = React.useState(false);
  const values = useContext(ProjectContext);
  const card = props.value;
  let index = values.projects.findIndex((project) => project._id === card._id);
  //console.log("found id: " + index);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveProject = () => {
    values.updateFoundProject(card, index);
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Editar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar Proyecto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estás a punto de editar este proyecto, al guardaran se reescribirán
            los cambios
          </DialogContentText>
          <TextField
            margin="normal"
            placeholder={card.title}
            onChange={values.handleChange("title")}
            id="name"
            label="Título del proyecto"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="normal"
            placeholder={card.description}
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
            placeholder={card.urlimage}
            onChange={values.handleChange("urlimage")}
            id="name"
            label="Link de la portada"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="normal"
            placeholder={card.projecturl}
            onChange={values.handleChange("projecturl")}
            id="name"
            label="Link del proyecto"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TagsArray />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={saveProject} color="primary">
            Actualizar proyecto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
