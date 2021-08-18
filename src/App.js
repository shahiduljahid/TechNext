import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Admin from "./Component/Admin/Admin";
import Employees from "./Component/Employess/Employees";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/employees">
            <Employees></Employees>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
