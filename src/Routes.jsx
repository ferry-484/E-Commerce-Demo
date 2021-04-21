import React from 'react';
import {HashRouter , Switch, Route} from 'react-router-dom';
import Next from './pages/Next';
import Home from './pages/Home';
import ShowListing from './pages/ShowListing';

export default function Routes() {
    return (
        <div>
            <HashRouter>
              <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/next' exact component={Next} />
              <Route path='/submit' exact component={ShowListing} />
              </Switch>
            </HashRouter>
        </div>
    )
}








//<Route path='/next' exact component={Next} />