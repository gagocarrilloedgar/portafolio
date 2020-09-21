import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// color combinations
//https://www.designwizard.com/blog/design-trends/colour-combination

let theme = createMuiTheme({
  palette: {
    //type:dark // changes the main theme to a darker one
    primary: {
      main: "#2255ff",
    },
    secondary: {
      main: "#ffffff",
    },
    ink: {
      backgroundColor: "#00000",
      color: "white",
    },
    posy: {
      backgroundColor: "#813772",
      color: "white",
    },
    embers: {
      backgroundColor: "#B82601",
      color: "white",
    },
    blue: {
      backgroundColor: "#2196f3",
      color: "white",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
