import React from "react";
import { HelmetMain } from "common";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: '20%',
    paddingRight: '20%',
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
    height: 160,
  },
  tarjeta_feedback: {
    paddingTop: 0,
    height: 175,
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

  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
      <div className={classes.root}>

        <h1>Retos de la semana</h1>

        <Grid container spacing={2}>
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

          <Grid item md={4}>
            <Card className={classes.tarjeta_retos}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Malware Actors
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Dificultad: avanzado
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color='primary' size="small" >Conocer más</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className={classes.tarjeta_retos}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Tendencias movilidad
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Dificultad: fácil
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color='primary' size="small" >Conocer más</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className={classes.tarjeta_retos}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    IoT Threat Analytics
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Dificultad: avanzado
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color='primary' size="small" >Conocer más</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className={classes.tarjeta_retos}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Sincronización de datos
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

        <h1>Feedback</h1>

        <Grid container spacing={4}>
          <Grid item md={4}>
            <Card className={classes.tarjeta_feedback}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">
                    Evaluar otros proyectos
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Evalúa proyectos de la comunidad y recibe puntos extra a cambio
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
                    Feedback de mis proyectos
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Aprende de tus errores gracias al feedback de la comunidad
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
                    Mis proyectos
                    </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Revisa y actualiza tus proyectos, descripción, etc
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
