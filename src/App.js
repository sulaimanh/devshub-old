import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Challenge from "./components/Main/Home/Challenge/Challenge";
import Home from "./containers/Main/Home/Home";
import Introduction from "./containers/Introduction/Introduction";
import Layout from "./containers/Layout/Layout";
import Messages from "./containers/Main/Messages/Messages";
import Profile from "./containers/Main/Profile/Profile";
import Project from "./components/Main/Home/Project/Project";
import Team from "./components/Main/Home/Team/Team";
import styles from "./App.module.scss";

function App() {
  const [auth, setAuth] = useState(true);
  const match = useRouteMatch("/home/:section/:id");

  useEffect(() => {
    console.log("[App.js] useEffect");
  });

  let routes = (
    <Switch>
      <Route path="/home/teams/:id" component={Team} />
      <Route path="/home/projects/:id" component={Project} />
      <Route path="/home/challenges/:id" component={Challenge} />

      <Route path="/profile" component={Profile} />
      <Route path="/messages" component={Messages} />
      <Route path="/" component={Home} />
    </Switch>
  );

  if (!auth) {
    routes = (
      <Switch>
        <Route path="/" component={Introduction} />
      </Switch>
    );
  }

  return (
    <div className={styles.app}>
      <Layout auth={auth}>{routes}</Layout>
    </div>
  );
}

export default App;
