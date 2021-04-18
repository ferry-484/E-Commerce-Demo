import React from 'react';
import './App.css';
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/products' component={ProductList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
