import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ProjectContext } from "../../providers/project.provider";
import { CollapseCardTest } from "./viewCard.component";
import { CollapseTextCard } from "./textCard.component";




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

export default function SimpleTabs({ userId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const values = useContext(ProjectContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    values.fethProjectsData(userId);
  }, [userId]);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {values.projects.length < 1 ? (
          <Grid container>
            <div></div>
            <h1>Todavía no hay proyectos</h1>
          </Grid>
        ) : (
          values.projects.map((card, index) => (
            <Grid item key={card._id} xs={12} sm={6} md={4}>
              <CollapseCardTest card={card} key={card._id} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
