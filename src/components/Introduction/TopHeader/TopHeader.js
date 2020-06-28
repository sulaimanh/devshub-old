import React, { useState } from "react";
import styles from "./TopHeader.module.scss";
import { headingPrimary as HeadingPrimary } from "../../UI/Text/Text";
import MediumLink from "../../UI/Links/Medium/MediumLink";
import SignIn from "../../../containers/Introduction/SignIn/SignIn";
// import Beautiful from "./Beautiful/Beautiful";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader__leftContainer}>
        <div className={styles.topHeader__statement}>
          <HeadingPrimary>
            A better way to get involved and build your skills
          </HeadingPrimary>
          <p className={styles.paragraph}>
            Helping developers work on projects and contribute to open source.
          </p>
        </div>
        <div className={styles.topHeader__buttons}>
          <MediumLink className="primary">Sign Up</MediumLink>
          <MediumLink className="secondary">About us</MediumLink>
        </div>
      </div>
      <div className={styles.topHeader__rightContainer}>
        <SignIn isSignUp={true} />
      </div>
    </div>
  );
};

export default TopHeader;
