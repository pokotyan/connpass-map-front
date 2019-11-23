import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../pages/sign-in";
import Search from "../pages/search";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/sign-in" component={SignIn} exact />
      </Switch>
    </Router>
  );
};
