import { makeStyles } from "@material-ui/core/styles";

const useProjectCardStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    "@media (max-width: 450px)": {
      height: "100%",
      width: "70vw",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default useProjectCardStyles;
