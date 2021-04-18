import React, { lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";

const Home = lazy(() => import("./pages/Home"));
const Inbox = lazy(() => import("./pages/Direct"));
const Explore = lazy(() => import("./pages/Explore"));

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/direct/inbox" component={Inbox} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
