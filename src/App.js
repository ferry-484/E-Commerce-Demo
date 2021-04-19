import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";

import ProductList from "./Components/ProductList";

import ViewCart from "./Components/ViewCart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route 
          exact path="/" 
          component={Login}>

          </Route>
          <Route 
          exact path="/products" 
          component={ProductList}>

          </Route>
          <Route 
          exact path="/view" 
          component={ViewCart}>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
