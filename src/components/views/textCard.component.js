import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import { CardActionArea } from "@material-ui/core";

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
    borderRadius: 20,
    background: "#80cbc4",
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

export const CollapseTextCard = ({ card }) => {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Grid>
      <Card className={classes.card} raised>
        <CardActionArea onClick={handleChange}>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontFamily: `"Montserrat",sans-serif` }}
            >
              {card.title}
            </Typography>
            <Collapse in={checked} collapsedHeight={20}>
              <Typography multiline>{card.description}</Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(e) => window.open(card.projecturl, "blank")}
          >
            Ver proyecto
          </Button>
          <Button size="small" color="primary" onClick={handleChange}>
            Ver descripción
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
