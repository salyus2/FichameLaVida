import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Homepage from "./components/Homepage/Homepage";
import Timesheet from "./components/Timesheet/Timesheet"

import "./css/index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/homepage/*">
          <Homepage />
        </Route>
        <Route exact path= "/timesheet/*">
          <Timesheet/>
        </Route>
        <Route exact path="/">
          <Redirect to="/homepage/"/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
