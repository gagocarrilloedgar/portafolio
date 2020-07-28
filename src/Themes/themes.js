import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// color combinations
//https://www.designwizard.com/blog/design-trends/colour-combination

let theme = createMuiTheme({
  palette: {
    //type:dark // changes the main theme to a darker one
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    ink: {
      backgroundColor: "#062F4F",
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
  typography: {
    button: {
      fontFamily: `"Montserrat", sans-serif`,
      fontStyle: "normal",
      textTransform: "none",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
