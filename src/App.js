import React from "react";
import styles from "./App.module.scss";

import Introduction from "./components/Introduction/Introduction";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <div className={styles.app}>
      {/* I will be handling the routing here */}
      <Layout>
        <Introduction />
      </Layout>
    </div>
  );
}

export default App;
