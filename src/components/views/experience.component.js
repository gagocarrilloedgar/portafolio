import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import {
  LastExperienceTimeLineCard,
  ExperienceTimeLineCard,
} from "./experienceCard.component";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    flex: "1 0 auto",
  },
}));

export default function ExperienceTimeline() {
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
    <Timeline align="alternate">
      {experiences.map((experience, index) =>
        index == experiences.length - 1 ? (
          <ExperienceTimeLineCard info={experience} />
        ) : (
          <LastExperienceTimeLineCard info={experience} />
        )
      )}
    </Timeline>
  );
}
