import React from "react";
import Header from "../compnents/js/Header";
import Home from "../compnents/js/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Header />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">LOGIN</Route>
          <Route path="/checkout">
            <h1>Passer la commande</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
