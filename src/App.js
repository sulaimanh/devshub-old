import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import Layout from "./containers/Layout/Layout";
import Introduction from "./containers/Introduction/Introduction";
import Home from "./containers/Main/Home/Home";
import Profile from "./containers/Main/Profile/Profile";
import Messages from "./containers/Main/Messages/Messages";

import Team from "./components/Main/Home/Team/Team";
import Project from "./components/Main/Home/Project/Project";
import Challenge from "./components/Main/Home/Challenge/Challenge";

import { Route, Switch, useRouteMatch } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(true);
  const match = useRouteMatch("/home/:section/:id");

  useEffect(() => {
    console.log("[App.js] useEffect");

    if (match) {
      console.log("sdasda", match);
    }
  }, [match]);

  // const authHandler = (choice) => {
  //   console.log(choice);

  //   setAuth(choice);
  // };
  let routes = (
    <Switch>
      <Route path="/home/teams/:id" component={Team} />
      <Route path="/home/projects/:id" component={Project} />
      <Route path="/home/challenges/:id" component={Challenge} />


      <Route path="/profile" component={Profile} />
      <Route path="/messages" component={Messages} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />
      <Route path="*">
        <Home />
      </Route>
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
