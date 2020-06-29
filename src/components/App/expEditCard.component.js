import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Grid, CardActions, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
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

const montserratStyle = {
  fontFamily: `"Montserrat",sans-serif`,
};

export const ExperienceCardEdit = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.content}>
        <Grid container justify="space-between">
          <Grid item xs={4}>
            <TextField
              sytle={montserratStyle}
              margin="dense"
              placeholder="Título del puesto"
              /*onChange={values.handleChange("title")}*/
              id="name"
              label="Título del puesto"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={1.5} sytle={{ textAlign: "left" }}>
            <TextField
              sytle={montserratStyle}
              margin="dense"
              placeholder="mm/yyyy"
              /*onChange={values.handleChange("title")}*/
              id="name"
              label="Fecha de inicio"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={1.5}>
            <TextField
              sytle={montserratStyle}
              margin="dense"
              fullWidth
              placeholder="mm/yyyy"
              /*onChange={values.handleChange("title")}*/
              id="name"
              label="Fecha de fin"
              type="email"
            />
          </Grid>
          <Grid item xs={4} sytle={{ alignItems: "left" }}>
            <TextField
              sytle={montserratStyle}
              margin="dense"
              fullWidth
              placeholder="Breve descripción"
              /*onChange={values.handleChange("title")}*/
              id="name"
              label="Breve descripción"
              type="email"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>Añadir experiencia</Button>
      </CardActions>
    </Card>
  );
};
