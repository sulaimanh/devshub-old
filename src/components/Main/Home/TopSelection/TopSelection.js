import React from "react";
import styles from "./TopSelection.module.scss";

// - This will show the main contact
const TopSelection = (props) => {
  return (
    <div className={styles.top}>
      <div
        onClick={() => props.handler("teams")}
        className={[
          styles.topLink,
          props.selectedChoice === "teams" ? styles.topLink__selected : null
        ].join(" ")}
      >
        <p className={styles.topText}>Teams</p>
      </div>
      <div
        onClick={() => props.handler("projects")}
        className={[
          styles.topLink,
          props.selectedChoice === "projects" ? styles.topLink__selected : null
        ].join(" ")}
      >
        <p className={styles.topText}>Projects</p>
      </div>
      <div
        onClick={() => props.handler("opensource")}
        className={[
          styles.topLink,
          props.selectedChoice === "opensource"
            ? styles.topLink__selected
            : null
        ].join(" ")}
      >
        <p className={styles.topText}>Open Source</p>
      </div>
    </div>
  );
};

export default TopSelection;
