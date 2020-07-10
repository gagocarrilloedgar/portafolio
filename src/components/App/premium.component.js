import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import ReactGA from "react-ga";
export default function PremiumButton({ title }) {
  const [open, setOpen] = useState(false);
  const [premimText, setPremium] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePremium = () => {
    setPremium(
      "Acutalmente estamos trabajando para poder tener preparados los mejores servicios y faltan los toques finales, para que puedas sacarle el máximo partido tu pportfolio con tu cuenta premium. Si tienes dudas o te gustaría poder saber la actual situación del proyecto porfavor rellena el formualrio en el área de contacto."
    );
    ReactGA.event({
      category: "Premium",
      action: "Premium button click",
      label: "plusone",
    });
  };

  return (
    <div>
      <Button
        color="primary"
        size="small"
        variant="contained"
        onClick={handleClickOpen}
      >
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{"Cuenta premium"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography align="justify">
              Para poder ver analaytics de tus proyectos, cuenta, personalizar
              estilos, colores, mejorar el posicionamiento y mucho más tienes
              que tener una subscricpción premium. Si quieres pasarte a premium
              puedes hacerlo ahora mismo, tardarás solo 5'.
            </Typography>
            <Button
              color="primary"
              variant="contained"
              small
              onClick={() => handlePremium()}
            >
              Pasar a premium
            </Button>
            <Typography align="justify">{premimText}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
