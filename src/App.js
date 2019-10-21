import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Router from "./config/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Router.map((route, index) => (
          <RouteWithSubRoute key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

const RouteWithSubRoute = route => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} route={route.routes} />}
    />
  );
};

export default App;
