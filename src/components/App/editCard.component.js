import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import UpdateProject from "./updateProject.component";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import { ViewTagsArray } from "./editTags.component";
import { ProjectContext } from "../../providers/project.provider";

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
    borderRadius: 5,
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
export const EditCard = ({ card }) => {
  const classes = useStyles();
  const projects = useContext(ProjectContext);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid>
      <Card className={classes.card} raised>
        <CardMedia
          className={classes.cardMedia}
          image={card.urlimage}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Collapse in={checked} collapsedHeight={20}>
            <Typography>{card.description}</Typography>
          </Collapse>
          <ViewTagsArray tags={card.tags} />
        </CardContent>
        <CardActions>
          <UpdateProject value={card} />
          <Button
            size="small"
            color="primary"
            onClick={() => projects.deleteProjectById(card._id)}
          >
            Eliminar
          </Button>
          <Button onClick={handleChange}>Ver descripción</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EditCard;
