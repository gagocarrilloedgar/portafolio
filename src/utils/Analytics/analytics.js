import ReactGA from "react-ga";
require("dotenv").config();

export function initializeGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
}

export function pageViewGA({ path }) {
  ReactGA.pageview(path);
}
