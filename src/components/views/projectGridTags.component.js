import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ProjectContext } from "../../providers/project.provider";
import { getJWT, localStorageDB } from "../../providers/helpers/jwt";
import { useState } from "react";
import ViewCardTags from "./viewCardTag.component";
import Axios from "axios";
import { routerMain } from "../../providers/routes/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    marginTop: "50px",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "45%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ProjecGridByTags() {
  const classes = useStyles();
  const values = useContext(ProjectContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(getJWT(localStorageDB.pTags));
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {projects.length < 1 ? (
          <Typography> No hay proyectos con ese tag</Typography>
        ) : (
          projects.map((card, index) => (
            <Grid item key={card._id} xs={12} sm={6} md={4}>
              <ViewCardTags card={card} key={card._id} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
