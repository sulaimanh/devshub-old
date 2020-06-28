import React from "react";
import styles from "./Header.module.scss";
import { headingSecondary as HeadingSecondary } from "../Text/Text";
import MediumLink from "../Links/Medium/MediumLink";
import SideDrawer from "../SideDrawer/SideDrawer";

const header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <HeadingSecondary>developers path</HeadingSecondary>
      </div>

      <div className={styles.header__links}>
        <div className={styles.header__links__sidedrawer}>
          <SideDrawer />
        </div>
        <div className={styles.header__links__spread}>
          <MediumLink handler={null} className="secondary">
            About Us
          </MediumLink>
          <MediumLink
            action="sign in"
            handler={props.handleSignIn}
            className="secondary"
          >
            Sign In
          </MediumLink>
          <MediumLink
            action="sign up"
            handler={props.handleSignIn}
            className="primary"
          >
            Sign Up
          </MediumLink>
        </div>
        <div className={styles.header__links__sidedrawer}>
          <MediumLink
            action="sign in"
            handler={props.handleSignIn}
            className="secondary"
          >
            Sign In
          </MediumLink>
        </div>
      </div>
    </div>
  );
};

export default header;
