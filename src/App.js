import React from "react";
import "./App.css";
import { UserContextProvider } from "./providers/user.provider";
import { ProjectProviderContext } from "./providers/project.provider";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/App/dashboard";
import Login from "./views/Main view/login";
import Register from "./views/Main view/register";
import { IndexView } from "./views/Main view";
import UserProfile from "./views/App/profile";
import UserProfile2 from "./views/App/profile2";

import NotFound from "./views/notfound";

function App() {
  return (
    <UserContextProvider>
      <ProjectProviderContext>
        <Switch>
          <Route path="/app" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Route path="/register" component={Register} />
          <Route path="/:id" component={UserProfile2} />
          <Route path="/" component={IndexView} />
        </Switch>
      </ProjectProviderContext>
    </UserContextProvider>
  );
}

export default App;
