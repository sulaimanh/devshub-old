import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import TopSelection from "./TopSelection/TopSelection";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sections from "./Sections/Sections";

// - This will show the main contact
const Home = (props) => {
  useEffect(() => {
    console.log("[Home.js] useEffect");
  }, []);

  return (
    <div className={styles.home}>
      <TopSelection />

      <div className={styles.home__list}>
        <Sections />
      </div>

      <div className={styles.home__buttons}>
        <MediumLink className="primary">
          <FontAwesomeIcon icon={faArrowLeft} />
        </MediumLink>
        <MediumLink className="primary">
          <FontAwesomeIcon icon={faArrowRight} />
        </MediumLink>
      </div>
    </div>
  );
};

export default Home;
