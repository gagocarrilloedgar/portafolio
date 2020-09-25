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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:100,
    paddingLeft: '25%',
    paddingRight:'25%',
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
    height:150, 
  },
  tarjeta_retos:{
    paddingTop: 0,
    height:160, 
  },
  tarjeta_feedback:{
    paddingTop: 0,
    height:175, 
  },
  tarjeta_skills:{
    paddingTop: 0,
    height:150, 
  },
  pos: {
    paddingBottom: 0,
    color: ''
  },
  
}));


export const Home = () => {
  initializeGA();
  pageViewGA({ path: window.location.pathname + window.location.search });
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
        <div className={classes.root}>

        <h1>Retos de la semana</h1>
        
          <Grid container spacing={4}>
            <Grid item md={4}>
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
            <Grid item md={6}>
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
                  <Button variant="outlined" color='primary' size="small" >Evaluar</Button>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={6}>
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
                  <Button variant="outlined" color='primary' size="small" >Ver feedback</Button>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <h1>Desarrolla tus aptitudes</h1>
          
          <Grid container spacing={4}>
            <Grid item md={3}>
              <Card className={classes.tarjeta_skills}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h7" component="h3">
                      Matemáticas
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    <Button variant="outlined" color='primary' size="small" href='https://www.youtube.com/watch?v=veATb_wuZSw'>Comenzar</Button>

                  </CardContent>
                  <CardActions>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item md={3}>
              <Card className={classes.tarjeta_skills}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h7" component="h3">
                     Programación
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                     
                    </Typography>
                    <Button variant="outlined" color='primary' size="small" href='https://www.youtube.com/watch?v=fYZsuJb5VqE'>Comenzar</Button>

                  </CardContent>
                  <CardActions>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item md={3}>
             <Card className={classes.tarjeta_skills}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h7" component="h3">
                       Visualización
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    
                    </Typography>
                    <Button variant="outlined" color='primary' size="small" href="https://www.youtube.com/watch?v=VSy5PuMN6Vs">Comenzar</Button>

                  </CardContent>
                  <CardActions>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item md={3}>
              <Card className={classes.tarjeta_skills}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h7" component="h3">
                    Modelado predictivo
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                     
                    </Typography>
                    <Button variant="outlined" color='primary' size="small" href='https://www.youtube.com/watch?v=o7OxGzF9hhU'>Comenzar</Button>

                  </CardContent>
                  <CardActions>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item md={3}>
              <Card className={classes.tarjeta_skills}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h7" component="h3">
                     Habilidades sociales y de negocio
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    <Button variant="outlined" color='primary' size="small" href='https://www.youtube.com/watch?v=09Knu34bYdw'>Comenzar</Button>

                  </CardContent>
                  
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>

    </React.Fragment>
  );
};
