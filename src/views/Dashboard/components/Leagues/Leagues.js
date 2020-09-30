import React from 'react'
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: '20%',
    paddingRight: '20%',
  },
}));

export const Leagues = () => {
    initializeGA();
    pageViewGA({ path: window.location.pathname + window.location.search });
    const { t } = useTranslation();
    const classes = useStyles();
    const tuPuntuación = 1221
    const puntuacionLeader = 2530

    return (
      <React.Fragment>
        <HelmetMain title={t("dashboard.helmet.leagues")} />
        <div className={classes.root}>
          <Grid container spacing={4} justify="center">
            <Grid item md={4}>
        
              <Paper>
                <h2>Data Science</h2>
              </Paper>
              <h3>{t("dashboard.leagues.level")}</h3>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Senior</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Junior</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary"/>
                  </TimelineSeparator>
                  <TimelineContent>Student</TimelineContent>
                </TimelineItem>
              </Timeline>
              
              <h3>{t("dashboard.leagues.yourScore")}</h3>
                <Paper>
                   {tuPuntuación}
                </Paper>
              <h3>{t("dashboard.leagues.leaderScore")}</h3>
                  <Paper>
                   {puntuacionLeader}
                  </Paper>
            </Grid>

            <Grid item md={4}>
              <Paper>
                 <h2>Digital Marketing</h2>
              </Paper>
              <h3>{t("dashboard.leagues.level")}</h3>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Senior</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Junior</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>Student</TimelineContent>
                </TimelineItem>
              </Timeline>
              <h3>{t("dashboard.leagues.yourScore")}</h3>
                <Paper>
                  1320
                </Paper>
              <h3>{t("dashboard.leagues.leaderScore")}</h3>
                <Paper>
                  2350
                </Paper>
            </Grid>

            <Grid item md={4}>
              <Paper>
                 <h2>Web Development</h2>
              </Paper>
              <h3>{t("dashboard.leagues.level")}</h3>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Senior</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Junior</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>Student</TimelineContent>
                </TimelineItem>
              </Timeline>
              <h3>{t("dashboard.leagues.yourScore")}</h3>
                <Paper elevation={1}>
                  150
                </Paper>
              <h3>{t("dashboard.leagues.leaderScore")}</h3>
                <Paper>
                  3600
                </Paper>
            </Grid>

          </Grid>
        </div>
      </React.Fragment>
    );
}

