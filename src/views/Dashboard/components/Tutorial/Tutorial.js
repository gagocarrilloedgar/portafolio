import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";
import { ChangePropertyDialog, CopyButton, DialogMain } from "common";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { OpenContext } from "hooks";

export default function Tutorial() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

  const steps = [
    t("dashboard.tutorial.step1"),
    t("dashboard.tutorial.step2"),
    t("dashboard.tutorial.step3"),
    t("dashboard.tutorial.step4"),
  ];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ChangePropertyDialog
            toChange={t("dashboard.tutorial.urlTitle")}
            title="Definir URL"
            url="namesurname"
            context={t("dashboard.tutorial.contextURL")}
          />
        );
      case 1:
        return t("dashboard.tutorial.case1");
      case 2:
        return t("dashboard.tutorial.case2");
      case 3:
        return <CopyButton />;
      default:
        return t("dashboard.tutorial.default");
    }
  };

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
                    {t("dashboard.tutorial.backButton")}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? t("dashboard.tutorial.finalOne")
                      : t("dashboard.tutorial.nextButton")}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>{t("dashboard.tutorial.finishInfo")}</Typography>
          <Button onClick={handleReset} className={classes.button}>
            {t("dashboard.tutorial.redoButton")}
          </Button>
        </Paper>
      )}
    </div>
  );
}

export const TutorialDialog = () => {
  const { t } = useTranslation();
  const { handleCloseFS } = useContext(OpenContext);
  return (
    <DialogMain
      title={t("dashboard.tutorial.dialogTitle")}
      action={handleCloseFS}
    >
      <Tutorial />
    </DialogMain>
  );
};
