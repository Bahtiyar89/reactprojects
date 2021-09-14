import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Details from "./components/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar item={[]} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
