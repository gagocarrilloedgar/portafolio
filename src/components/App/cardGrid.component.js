import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ProjectContext } from "../../providers/project.provider";
import EditCard from "./editCard.component";

const useStyles = makeStyles((theme) => ({
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const ProjectsGrid = () => {
  const classes = useStyles();
  const projects = useContext(ProjectContext);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {projects.projects === null ? (
              <Grid container>
                <h1>Todavía no tienes ningun proyecto</h1>
              </Grid>
            ) : (
              projects.projects.map((card) => (
                <Grid item key={card._id} xs={12} sm={6} md={4}>
                  <EditCard card={card} key={card._id} />
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default ProjectsGrid;
