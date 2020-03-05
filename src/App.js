import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "./components/login/login";
import UsersList from "./components/usersList/usersList";

const history = createBrowserHistory();

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/usersList">
          <UsersList />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
