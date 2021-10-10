import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/edit/:id">
          <EditUserForm />
        </Route>
        <Route path="/add">
          <AddUserForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
