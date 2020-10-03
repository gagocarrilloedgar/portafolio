import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  icon: {
    color: "#2255ff",
    fontSize: "40px",
    margin: "10px",
    "@media (max-width: 500px)": {
      fontSize: "40px",

    },
  },

}));
