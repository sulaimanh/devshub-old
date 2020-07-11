import React, { useEffect } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";
import Sections from "./Sections/Sections";
import TopSelection from "./TopSelection/TopSelection";
import styles from "./Home.module.scss";

// - This will show the main contact
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
