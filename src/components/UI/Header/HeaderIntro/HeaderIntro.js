import { headingSecondary as HeadingSecondary } from "../../Text/Text";
import MediumLink from "../../Links/Medium/MediumLink";
import React from "react";
import styles from "./HeaderIntro.module.scss";

const HeaderIntro = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <HeadingSecondary>developers path</HeadingSecondary>
      </div>
      <div className={styles.header__links}>
        <div className={styles.header__links__spread}>
          <MediumLink handler={null} className='secondary'>
            About Us
          </MediumLink>
          <MediumLink
            id='sign in'
            handler={props.handleSignIn}
            className='secondary'
          >
            Sign In
          </MediumLink>
          <MediumLink
            id='sign up'
            handler={props.handleSignIn}
            className='primary'
          >
            Sign Up
          </MediumLink>
        </div>

        <div className={styles.header__links__smallscreen}>
          <MediumLink
            id='sign in'
            handler={props.handleSignIn}
            className='secondary'
          >
            Sign In
          </MediumLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderIntro;
