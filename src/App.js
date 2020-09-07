import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AuthContext } from "./helper/Auth";
import Home from "./containers/Main/Home/Home";
import Introduction from "./containers/Introduction/Introduction";
import Layout from "./containers/Layout/Layout";
import Messages from "./containers/Main/Messages/Messages";
import Profile from "./containers/Main/Profile/Profile";
import UserPost from "./components/Main/Home/UserPost/UserPost";
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

        <Route path='/home/:category/:id' component={UserPost} />

        <Route path='/profile' component={Profile} />
        <Route path='/messages' component={Messages} />
        <Route path='/home' component={Home} />

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
