import React, { useState } from "react";
import styles from "./Home.module.scss";
import TopSelection from "./TopSelection/TopSelection";
import Teams from "./Teams/Teams";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// - This will show the main contact
const Dashboard = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("team");

  const selectedChoiceHandler = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <div className={styles.home}>
      <TopSelection
        selectedChoice={selectedChoice}
        handler={selectedChoiceHandler}
      />
      <Teams />
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

export default Dashboard;
