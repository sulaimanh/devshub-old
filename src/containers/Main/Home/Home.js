import React, { useEffect } from "react";

import Sections from "./Sections/Sections";
import TopSelection from "./TopSelection/TopSelection";
import styles from "./Home.module.scss";

const Home = (props) => {
  useEffect(() => {
    console.log("[Home.js] useEffect");
  });

  return (
    <div className={styles.home}>
      <TopSelection />

      <div className={styles.home__list}>
        <Sections />
      </div>
    </div>
  );
};

export default Home;
