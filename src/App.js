import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import Layout from "./containers/Layout/Layout";
import Introduction from "./containers/Introduction/Introduction";
import Home from "./containers/Main/Home/Home";
import Profile from "./containers/Main/Profile/Profile";
import Messages from "./containers/Main/Messages/Messages";

import Team from "./components/Main/Home/Team/Team";
import Project from "./components/Main/Home/Project/Project";
import OpenSource from "./components/Main/Home/OpenSource/OpenSource";

import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(true);
  const teamMatch = useRouteMatch("/home/projects/:projectId");
  const projectMatch = useRouteMatch("/home/projects/:projectId");
  const openSourceMatch = useRouteMatch("/home/projects/:projectId");

  const projects = [
    {
      id: 1,
      title: "Developers Path",
      description: "This is the description",
      techUsed: ["Reactjs", "JavaScript", "Redux"],
      techNeeded: ["Reactjs", "Nodejs", "JavaScript", "Redux"]
    }
  ];

  useEffect(() => {
    console.log("Hello");

    if (projectMatch) {
      console.log(projectMatch.params.projectId);
    }
  }, [projectMatch]);

  // const authHandler = (choice) => {
  //   console.log(choice);

  //   setAuth(choice);
  // };
  let routes = (
    <Switch>
      <Route path="/home/teams/:teamId" component={Team} />
      <Route path="/home/projects/:projectId">
        <Project />
      </Route>
      <Route path="/home/opensource/:opensourceId" component={OpenSource} />

      <Route path="/profile" component={Profile} />
      <Route path="/messages" component={Messages} />
      {/* <Route path="/home" component={Home} /> */}
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
      {/* I will be handling the routing here */}
      <Layout auth={auth}>{routes}</Layout>
    </div>
  );
}

export default App;
