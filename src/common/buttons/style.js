import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    margin: "5px",
    fontSize: "11px",
    "@media (max-width: 450px)": {
      fontSize: "9px",
    },
    "@media (max-width: 350px)": {
      fontSize: "8px",
    },
  },
}));

export default useStyles;
