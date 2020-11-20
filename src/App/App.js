import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@material-ui/core";
import { initializeGA, pageViewGA } from "utils";
import { HelmetMain } from "common";
import { theme } from "Themes";
import { Dashboard, MainScreen,BDashboard } from "views";


function App() {
  initializeGA();
  pageViewGA({ path: window.location.pathname + window.location.search });
  const { t } = useTranslation();

  return (
    <div >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HelmetMain title={t("home.helmet.title")} />
        <Switch>
          <Route path="/business" component={BDashboard}/>
          <Route path="/app" component={Dashboard} />
          <Route path="/index" component={MainScreen} />
          <Route path="/" component={MainScreen} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
