import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ChangePropertyDialog from "./changeProperty.component";
import { TextField } from "@material-ui/core";
import CopyPersonalURL from "./copyURL.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Definir tu url personal",
    "Completar perfil",
    "Crear tu primer proyecto",
    "Comparte tu pportfolio",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <ChangePropertyDialog
          toChange="personalURL"
          title="Definir URL"
          url="namesurname"
          context="Aquí puedes personalizar como quieres que se vea tu url pública. Antes de cambiarla ten en cuenta que la incial que definiste quedará libre"
        />
      );
    case 1:
      return "En el panel lateral encontrarás una pestaña que te lleva a la configuración de tu perfil ahí podrás editar todos tus datos personales";
    case 2:
      return `En cualquiera de las pantallas podrás ver un botón en la parte inferior derecha que te permite crear proyectos. 
      Clicando en crear proyecto se abrirá un popup con todas las intrucciones. Para ver los proyectos, eliminarlos o editarlos solo tienes que ir al tu panel de proyectos (dashboard)
      el cual puedes acceder utilizando la barra lateral.`;
    case 3:
      return <CopyPersonalURL />;
    default:
      return "Unknown step";
  }
}

export default function FirstSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography style={{ textAlign: "justify" }}>
                {getStepContent(index)}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Atrás
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Final" : "Siguiente"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Empezar de nuevo
          </Button>
        </Paper>
      )}
    </div>
  );
}
