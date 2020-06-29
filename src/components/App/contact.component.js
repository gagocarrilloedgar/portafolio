import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { ProjectContext } from "../../providers/project.provider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Info from "@material-ui/icons/InfoOutlined";
import { Typography } from "@material-ui/core";

export default function ContactIconButton(props) {
  const [open, setOpen] = React.useState(false);
  const values = useContext(ProjectContext);
  const card = props.value;
  //let index = values.projects.findIndex((project) => project._id === card._id);
  //console.log("found id: " + index);
  const montserratStyle = {
    fontFamily: `"Montserrat",sans-serif`,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveProject = () => {
    //values.updateFoundProject(card, index);
    setOpen(false);
  };

  return (
    <div>
      <ListItem button onClick={() => handleClickOpen()}>
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        <ListItemText primary="Contancto" />
      </ListItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contacto</DialogTitle>
        <DialogContent>
          <Typography align="justify" style={montserratStyle}>
            ¡Hola! Estamos encantados qué estes utilizando portfolio. Si quieres
            contactar con nosotros para colaborar con el proyecto o por algún
            problema que hayas tenido o simplemente para consultar dudas, por
            favor envía un correo a edgar.gago@upc.edu.
            <br></br>
            <br></br>
            Acutalmente estamos en fase de desarrollo y queremos contar contigo
            para hacer que la plataforma pueda ajustarse y encajar en todo tipo
            de necesidades.
          </Typography>
          {/*<TextField
            margin="normal"
            placeholder="Nombre"
            onChange={values.handleChange("title")}
            id="name"
            label="Nombre"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="normal"
            placeholder="correo"
            onChange={values.handleChange("description")}
            id="name"
            label="Correo"
            type="email"
            multiline
            variant="outlined"
            rows={2}
            fullWidth
          />
          <TextField
            margin="normal"
            placeholder="Motivo de contacto"
            onChange={values.handleChange("urlimage")}
            id="name"
            label="Motivo de contacto"
            type="email"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
          />*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
            Cerrar
          </Button>
          {/*<Button color="primary">Enviar</Button>*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}