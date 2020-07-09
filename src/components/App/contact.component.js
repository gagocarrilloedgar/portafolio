import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Info from "@material-ui/icons/InfoOutlined";
import { Typography } from "@material-ui/core";
import emailjs from "emailjs-com";

export default function ContactIconButton(props) {
  const [open, setOpen] = React.useState(false);
  const [formTemplate, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let formParameters = {
      from_name: formTemplate.email,
      to_name: "pportfolioemail",
      subject: formTemplate.subject,
      message_html: formTemplate.message,
    };

    emailjs
      .send(
        "pportfolioemail",
        "template_4x3fmgV4",
        formParameters,
        "user_9iXWknkRZxYbm42EanlCo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
    handleClose();
    alert(
      "Su mensaje se ha enviado correcatamente, pronto nos pondremos en contacto"
    );
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (prop) => (event) => {
    setForm({
      ...formTemplate,
      [prop]: event.target.value,
    });
  };

  return (
    <div>
      <ListItem button onClick={() => handleClickOpen()}>
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        <ListItemText primary="Contacto" />
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
            favor rellena el siguiente formulario:
          </Typography>
          <TextField
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange("name")}
          />
          <TextField
            margin="dense"
            id="email"
            label="Correo"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleChange("email")}
          />
          <TextField
            margin="dense"
            id="subject"
            label="Asunto"
            type="text"
            fullWidth
            onChange={handleChange("subject")}
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="message"
            label="Pregunta"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChange("message")}
          />

          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            size="small"
            onClick={(e) => handleSubmit(e)}
            color="primary"
          >
            Enviar
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleClose(e)} color="primary">
            Cerrar
          </Button>
          {/*<Button color="primary">Enviar</Button>*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}
