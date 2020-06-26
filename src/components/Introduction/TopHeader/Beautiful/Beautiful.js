import React from "react";
import styles from "./Beautiful.module.scss";

const beautiful = (props) => {
  return (
    <div className={styles.beautiful}>
      <div className={styles.beautiful__circle1}>&nbsp;</div>

      <div className={styles.beautiful__halfCircle1}>&nbsp;</div>
      <div className={styles.beautiful__halfCircle2}>&nbsp;</div>
      <div className={styles.beautiful__circle3}>&nbsp;</div>
    </div>
  );
};

export default beautiful;
