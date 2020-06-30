import React, { useState } from "react";
import styles from "./App.module.scss";

import Layout from "./containers/Layout/Layout";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import MobileMenu from "./components/UI/MobileMenu/MobileMenu";
import Introduction from "./containers/Introduction/Introduction";
import Dashboard from "./containers/Main/Home/Home";

import { Route, Switch } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Home");

  let routes = (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );

  if (!auth) {
    routes = (
      <Switch>
        <Route path="/" component={Introduction} />
      </Switch>
    );
  }

  const selectTabHandler = (choice) => {
    setSelectedTab(choice);
  };

  const authHandler = (choice) => {
    console.log(choice);

    setAuth(choice);
  };

  let header = auth ? <Header handler={authHandler} auth={auth} /> : null;
  let footer = auth ? <Footer /> : null;
  let menu = auth ? (
    <MobileMenu handler={selectTabHandler} choice={selectedTab} />
  ) : null;

  return (
    <div className={styles.app}>
      {/* I will be handling the routing here */}
      {header}
      <Layout auth={auth}>{routes}</Layout>
      {menu}
      {footer}
    </div>
  );
}

export default App;
