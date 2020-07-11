import React from "react";
import styles from "./TopSelection.module.scss";

// - This will show the main contact
const TopSelection = (props) => {
  const selections = [
    { heading: "Teams", choice: "teams" },
    { heading: "Projects", choice: "projects" },
    { heading: "Challenges", choice: "challenges" }
  ];

  const view = selections.map((selection, index) => {
    return (
      <div
        key={index}
        onClick={() => props.handler(selection.choice)}
        className={[
          styles.topLink,
          props.selectedChoice === selection.choice
            ? styles.topLink__selected
            : null
        ].join(" ")}
      >
        <p className={styles.topText}>{selection.heading}</p>
      </div>
    );
  });

  return <div className={styles.top}>{view}</div>;
};

export default TopSelection;
