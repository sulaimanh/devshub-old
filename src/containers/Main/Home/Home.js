import React, { useState } from "react";
import styles from "./Home.module.scss";
import TopSelection from "./TopSelection/TopSelection";

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
    </div>
  );
};

export default Dashboard;
