import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

import { AuthContext } from "./context/Auth";
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
  const [authenticated, setAuthenticated] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const match = useRouteMatch("/home/:category/:id");

  useEffect(() => {
    console.log("[App.js] useEffect");
    console.log("USERSSSSSSSS");
    currentUser ? setAuthenticated(true) : setAuthenticated(false);
  }, [currentUser]);

  let routes = (
    <Switch>
      <Route path='/'>
        <Introduction />
      </Route>
    </Switch>
  );

  if (authenticated) {
    routes = (
      <Switch>
        <Route path='/home/teams/:id' component={Team} />
        <Route path='/home/projects/:id' component={Project} />
        <Route path='/home/challenges/:id' component={Challenge} />

        <Route path='/profile' component={Profile} />
        <Route path='/messages' component={Messages} />
        <Route path='/home/:category' component={Home} />
        <Redirect to='/home/teams' />
      </Switch>
    );
  }

  return (
    <div className={styles.app}>
      <Layout auth={authenticated}>{routes}</Layout>
    </div>
  );
}

export default App;
