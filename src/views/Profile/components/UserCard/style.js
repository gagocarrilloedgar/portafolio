import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card1: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    width: "400px",
    margin: 0,
    "@media (max-width: 1320px)": {
      width: "300px",
    },
    "@media (max-width: 830px)": {
      width: "80%",
      marginLeft: "10%",
    },
  },

  cardMedia: {
    margin: "20px",
    paddingTop: "88%",
    borderRadius: "50%", // 16:9
    "@media (max-width: 830px)": {
      margin: "50px",
      paddingTop: "30%",
      width: "30%",
      marginLeft: "35%",
    },
  },
}));
