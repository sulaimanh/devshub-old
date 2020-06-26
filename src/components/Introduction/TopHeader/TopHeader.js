import React, { useState } from "react";
import styles from "./TopHeader.module.scss";
import { headingPrimary as HeadingPrimary } from "../../UI/Text/Text";
import MediumLink from "../../UI/Links/Medium/MediumLink";
// import Beautiful from "./Beautiful/Beautiful";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader__leftContainer}>
        <div className={styles.topHeader__statement}>
          <HeadingPrimary>
            A better way to get involved and interact with developers
          </HeadingPrimary>
          <p className={styles.paragraph}>
            Contributing to open source and working on projects just got easier.
          </p>
        </div>
        <div className={styles.topHeader__buttons}>
          <MediumLink className="primary">Sign Up</MediumLink>
          <MediumLink className="secondary">About us</MediumLink>
        </div>
      </div>
      <div className={styles.topHeader__rightContainer}>
        {/* <Beautiful /> */}
      </div>
    </div>
  );
};

export default TopHeader;
