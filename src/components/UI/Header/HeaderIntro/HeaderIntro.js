import Button from "../../Button/Button";
import { headingSecondary as HeadingSecondary } from "../../Text/Text";
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
          <Button
            size='small'
            label='About Us'
            category='secondary'
            type='button'
          />
          <Button
            handler={props.handleSignIn}
            category='secondary'
            label='Sign In'
            type='button'
            size='small'
          />
          <Button
            handler={() => props.handleSignIn("sign up")}
            category='primary'
            label='Sign Up'
            type='button'
            size='small'
          />
        </div>

        <div className={styles.header__links__smallscreen}>
          <Button
            handler={props.handleSignIn}
            category='secondary'
            label='Sign In'
            type='button'
            size='small'
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderIntro;
