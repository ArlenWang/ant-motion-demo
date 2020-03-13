import React from 'react';
import './assets/css/Index.css';
import { createBrowserHistory } from "history";
import {  Router, Route, Switch } from "react-router-dom";//HashRouter as
import indexRoutes from "./router/index";
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>
  );
}

export default App;
