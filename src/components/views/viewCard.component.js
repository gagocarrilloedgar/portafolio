import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import { CardActionArea, CardHeader, Avatar } from "@material-ui/core";
import { ViewTagsArray } from "../App/editTags.component";
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

const montserratStyle = {
  fontFamily: `"Montserrat",sans-serif`,
  align: "justify",
};

export const CollapseCardTest = ({ card }) => {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardActionArea onClick={handleChange}>
          <CardMedia
            className={classes.cardMedia}
            image={card.urlimage}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              style={montserratStyle}
              align="justify"
            >
              {card.title}
            </Typography>
            <Collapse in={checked}>
              <Typography multiline style={montserratStyle} align="justify">
                {card.description}
              </Typography>
            </Collapse>
            <ViewTagsArray tags={card.tags} />
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