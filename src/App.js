import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login/login";
import UsersList from "./components/usersList/usersList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/usersList">
          <UsersList />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
