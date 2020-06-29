import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import WorkOutline from "@material-ui/icons/WorkOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const ExperienceCard = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container justify="flex-start">
          <Grid item xs={6}>
            <Typography
              component="h6"
              variant="h6"
              style={{
                textAlign: "left",
                fontFamily: `"Montserrat",sans-serif`,
              }}
            >
              {data.puesto}
            </Typography>
          </Grid>
          <Grid item xs={6} sytle={{ textAlign: "left" }}>
            <Typography
              variant="overline"
              style={{
                textAlign: "right",
                fontFamily: `"Montserrat",sans-serif`,
              }}
            >
              {data.fechaInicio + " | " + data.fechaFin}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          style={{ textAlign: "left", fontFamily: `"Montserrat",sans-serif` }}
        >
          {data.empresa}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          style={{ textAlign: "left", fontFamily: `"Montserrat",sans-serif` }}
        >
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const ExperienceTimeLineCard = ({ info }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          <WorkOutline color="primary" />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <ExperienceCard data={info} />
      </TimelineContent>
    </TimelineItem>
  );
};

export const LastExperienceTimeLineCard = ({ info }) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          <WorkOutline color="primary" />
        </TimelineDot>
        <TimelineConnector className={classes.secondaryTail} />
      </TimelineSeparator>
      <TimelineContent>
        <ExperienceCard data={info} />
      </TimelineContent>
    </TimelineItem>
  );
};
