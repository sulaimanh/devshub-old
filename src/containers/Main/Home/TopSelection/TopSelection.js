import React from "react";
import styles from "./TopSelection.module.scss";

// - This will show the main contact
const TopSelection = (props) => {
  return (
    <div className={styles.top}>
      <div
        onClick={() => props.handler("project")}
        className={[
          styles.topLink,
          props.selectedChoice === "project" ? styles.topLink__selected : null
        ].join(" ")}
      >
        <p className={styles.topText}>Find a team</p>
      </div>
      <div
        onClick={() => props.handler("source")}
        className={[
          styles.topLink,
          props.selectedChoice === "source" ? styles.topLink__selected : null
        ].join(" ")}
      >
        <p className={styles.topText}>Find an Open Source</p>
      </div>
    </div>
  );
};

export default TopSelection;
