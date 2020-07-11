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
import Admin from "./components/admin/Admin"

import "./css/index.css"
import NotFound from './components/molecules/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/homepage/*">
          <Homepage />
        </Route>
        <Route exact path= "/timesheet">
          <Timesheet/>
        </Route>
        <Route exact path= "/admin">
          <Admin/>
        </Route>
        <Route exact path="/">
          <Redirect to="/homepage/"/>
        </Route>
        <Route exact path="/*">
        <NotFound/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
