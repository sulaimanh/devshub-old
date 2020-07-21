import {
  headingPrimary as HeadingPrimary,
  paragraph as Paragraph
} from "../../UI/Text/Text";

import MediumLink from "../../UI/Links/Medium/MediumLink";
import React from "react";
import SignIn from "../../../containers/Introduction/SignIn/SignIn";
import styles from "./TopHeader.module.scss";

const TopHeader = (props) => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader__leftContainer}>
        <div className={styles.topHeader__statement}>
          <HeadingPrimary>Bringing opportunities to engineers</HeadingPrimary>
          <Paragraph>
            A better way to get involved and build your skills
          </Paragraph>
        </div>
        <div className={styles.topHeader__buttons}>
          <MediumLink
            id='sign up'
            handler={props.handleSignIn}
            className='primary'
          >
            Sign Up
          </MediumLink>
          <MediumLink className='secondary'>About us</MediumLink>
        </div>
      </div>
      <div className={styles.topHeader__rightContainer}>
        <SignIn isSignUp={true} />
      </div>
    </div>
  );
};

export default TopHeader;
