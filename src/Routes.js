import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Next from "./Components/Next";
import List from "./Components/List";
import Home from "./Components/Home";
import EditPage from "./Components/Edit";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/edit"
          component={EditPage}
          render={(e, props) => <EditPage {...e} data={props} />}
        />
        <Route
          exact={true}
          path="/list"
          component={List}
          render={(e, props) => <List {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/next"
          component={Next}
          render={(e, props) => <Next {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/" // always loads first
          render={(e, props) => <Home {...e} data={props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
