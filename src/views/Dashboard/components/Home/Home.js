import React, { useContext, useEffect, useState } from "react";
import { ButtonTextBlack, HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { borders } from '@material-ui/system';
import { window } from "utils";
import { blue } from "@material-ui/core/colors";
import Countdown from 'react-countdown';

import { UserContext } from "hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: '17%',
    paddingRight: '17%',
  },
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  division: {
    backgrouncolor: 'black',
    paddingTop: '200px',
  },
  paper: {
    height: 150,
  },
  tarjeta_retos: {
    paddingTop: 0,
    height: 200,
  },
  tarjeta_feedback: {
    paddingTop: 0,
    height: 200,
  },
  tarjeta_skills: {
    paddingTop: 0,
    height: 150,
  },
  pos: {
    paddingBottom: 0,
    color: ''
  },
}));

export const Home = () => {
  initializeGA();
  /*pageViewGA({ path: window.location.pathname + window.location.search });*/
  const { t } = useTranslation();
  const classes = useStyles();
  const { toMyProjects } = window();
  

  const league = "Data Science"
  const level = "Junior"
  const totalScore = 18200
  const deadline = "18/10/2020"

  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
      <div className={classes.root}>

        <Grid container spacing={4} direction="row" justify="center">
          <Grid item md={2}>
            <h3>{t("dashboard.home.league")}</h3>
            <Paper elevation={3}>
                {league}
            </Paper>
          </Grid>
          <Grid item md={2}>
          <h3>{t("dashboard.home.level")}</h3>
            <Paper elevation={3}>
                {level}
            </Paper>
          </Grid>
          <Grid item md={2}>
          <h3>{t("dashboard.home.score")}</h3>
            <Paper elevation={3}>
                {totalScore}
            </Paper>
          </Grid>

        </Grid>

        <h1>{t("dashboard.home.weeklyChallenge")}</h1>
        <h4>{t("dashboard.home.deadline")}: <Countdown date={Date.now() + 604800000} /> </h4>
        <Grid container spacing={2} justify="center">
          <Grid item sm={12} md={4}>
            <Card className={classes.tarjeta_retos}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Linkedin Web-Scriping
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Dificultad: media
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color='primary' size="small" >Conocer más</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

      
        </Grid>

        <h1>{t("dashboard.home.feedback")}</h1>

        <Grid container spacing={4}>
          <Grid item md={4}>
            <Card className={classes.tarjeta_feedback}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">
                    {t("dashboard.home.feedbackProject")}
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {t("dashboard.home.feedbackProject_descp")}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color='primary' size="small" >Evaluar</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.tarjeta_feedback}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">
                   {t("dashboard.home.feedbackToMyProjects")}
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {t("dashboard.home.feedbackToMyProjects_descp")}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color='primary' size="small" >Ver feedback</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.tarjeta_feedback}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">
                  {t("dashboard.home.myProjects")}
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {t("dashboard.home.myProjects_descp")}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={toMyProjects} variant="outlined" color='primary' size="small" >Ver proyectos</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>

    </React.Fragment>
  );
};
