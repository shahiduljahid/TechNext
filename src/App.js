import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home/Home";



function App() {
 
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          
          </Route>
          <Route path="/skills">
           
          </Route>
          <Route path="/projects">
         
          </Route>
          <Route path="/contact">
            
          </Route>
          <Route path="/blogs"></Route>
          <Route path="/">
          <Home></Home>
           
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
