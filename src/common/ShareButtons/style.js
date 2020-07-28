import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const styleShare = {
  margin: "2.5px",
};

export { useStyles, styleShare };
