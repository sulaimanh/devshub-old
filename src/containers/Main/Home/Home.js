import React, { useState } from "react";
import styles from "./Home.module.scss";
import TopSelection from "./TopSelection/TopSelection";
import Teams from "./Teams/Teams";

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
    </div>
  );
};

export default Dashboard;
