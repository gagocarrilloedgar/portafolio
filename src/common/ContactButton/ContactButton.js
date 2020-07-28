import React, { useState } from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@material-ui/core";

import emailjs from "emailjs-com";
import { useContext } from "react";
import { OpenContext } from "hooks";

export default function ContactButton(props) {
  const { openContact, setContact } = useContext(OpenContext);
  const [formTemplate, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //let index = values.projects.findIndex((project) => project._id === card._id);
  //console.log("found id: " + index);

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
    setContact(false);
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
      <React.Fragment>{props.children}</React.Fragment>

      <Dialog
        open={openContact}
        onClose={() => setContact(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contacto</DialogTitle>
        <DialogContent>
          <Typography align="justify">
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
          <Button onClick={() => setContact(false)} color="primary">
            Cerrar
          </Button>
          {/*<Button color="primary">Enviar</Button>*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}
