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
    orange: {
      backgroundColor: "#EF8B07",
      color: "white",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
