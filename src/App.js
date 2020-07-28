import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AuthContext } from "./helper/Auth";
import Challenge from "./components/Main/Home/Challenge/Challenge";
import Home from "./containers/Main/Home/Home";
import Introduction from "./containers/Introduction/Introduction";
import Layout from "./containers/Layout/Layout";
import Messages from "./containers/Main/Messages/Messages";
import Profile from "./containers/Main/Profile/Profile";
import Project from "./components/Main/Home/Project/Project";
import Team from "./components/Main/Home/Team/Team";
import UserProfile from "./containers/Main/Profile/Profile";
import styles from "./App.module.scss";

function App() {
  const { isAuth, currentUser } = useContext(AuthContext);
  const [scrollButton, setScrollButton] = useState(false);

  useEffect(() => {
    console.log("[App.js] useEffect");
  });

  let routes = (
    <Switch>
      <Route path='/'>
        <Introduction />
      </Route>
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        <Route path='/profile/:userId' component={UserProfile} />

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
      <Layout auth={isAuth}>{routes}</Layout>
    </div>
  );
}

export default App;
