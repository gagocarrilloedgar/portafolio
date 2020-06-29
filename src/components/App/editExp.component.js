import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ExperienceCardEdit } from "./expEditCard.component";
import { useState } from "react";
import { ExperienceCardEditList } from "./expCardEditList.component";

export const EditExperiencia = () => {
  const [experiences, setExperiences] = useState([
    {
      puesto: "1",
      empresa: "empresa",
      description: "description",
      fechaInicio: "fechaInicio",
      fechaFin: "fechaFin",
    },
    {
      puesto: "2",
      empresa: "empresa",
      description: "description",
      fechaInicio: "fechaInicio",
      fechaFin: "fechaFin",
    },
    {
      puesto: "3",
      empresa: "empresa",
      description: "description",
      fechaInicio: "fechaInicio",
      fechaFin: "fechaFin",
    },
  ]);
  return (
    <Grid container justify="center">
      <Grid item xs={10} margin={10}>
        <ExperienceCardEdit />
        <Typography
          variant="h5"
          component="h1"
          style={{
            textAlign: "left",
            margin: "10px",
            fontFamily: `"Montserrat",sans-serif`,
          }}
        >
          Experiencia
        </Typography>
        {experiences.map((experience) => (
          <ExperienceCardEditList data={experience} />
        ))}
      </Grid>
    </Grid>
  );
};
