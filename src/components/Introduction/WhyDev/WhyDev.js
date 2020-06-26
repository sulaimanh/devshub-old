import React from "react";
import styles from "./WhyDev.module.scss";
import { headingSecondary as HeadingSecondary } from "../../UI/Text/Text";

const WhyDev = (props) => {
  return (
    <div className={styles.why}>
      <div className={styles.why__dev}>
        <div>
          <HeadingSecondary>Do you have an idea?</HeadingSecondary>
          <p className={styles.why__devHeading}></p>
        </div>
        <div>
          <HeadingSecondary>Are you looking for an idea?</HeadingSecondary>
          <p className={styles.why__devHeading}></p>
        </div>
      </div>
      <div className={styles.why__illus}>
        <HeadingSecondary>Why Developers Path?</HeadingSecondary>
      </div>
    </div>
  );
};

export default WhyDev;
