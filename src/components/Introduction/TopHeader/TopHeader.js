import {
  headingPrimary as HeadingPrimary,
  paragraph as Paragraph
} from "../../UI/Text/Text";

import Button from "../../UI/Button/Button";
import React from "react";
import SignIn from "../../../containers/Introduction/SignIn/SignIn";
import styles from "./TopHeader.module.scss";

const TopHeader = (props) => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader__leftContainer}>
        <div className={styles.topHeader__statement}>
          <HeadingPrimary>Bringing opportunities to developers</HeadingPrimary>
          <Paragraph>
            A better way to get involved and build your skills
          </Paragraph>
        </div>
        <div className={styles.topHeader__buttons}>
          <Button
            handler={() => props.handleSignIn("sign up")}
            type='button'
            category='primary'
            label='Sign Up'
          />
          <Button category='secondary' type='button' label='About Us' />
        </div>
      </div>
      <div className={styles.topHeader__rightContainer}>
        <SignIn changeModalHandler={props.changeModalHandler} isSignUp={true} />
      </div>
    </div>
  );
};

export default TopHeader;
