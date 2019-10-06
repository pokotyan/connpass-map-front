import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "../pages/top";
import Hoge from "../pages/hoge";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Top} exact />
        <Route path="/hoge" component={Hoge} exact />
      </Switch>
    </Router>
  );
};
