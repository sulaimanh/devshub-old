import React, { useState, useEffect } from "react";
import styles from "./HeaderIntro.module.scss";
import { headingSecondary as HeadingSecondary } from "../../Text/Text";
import MediumLink from "../../Links/Medium/MediumLink";

const HeaderIntro = (props) => {
  const [showHeader, setHeader] = useState({
    visible: true,
    yOffset: window.pageYOffset
  });

  const handleScroll = () => {
    const yOffset = window.pageYOffset;

    let visible = yOffset < showHeader.yOffset;

    if (yOffset === 0) {
      visible = true;
    }

    setHeader({ visible: visible, yOffset: yOffset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={[
        styles.header,
        showHeader.visible && !props.showModal
          ? styles.toggleHeaderOn
          : styles.toggleHeaderOff
      ].join(" ")}
    >
      <div className={styles.header__logo}>
        <HeadingSecondary>developers path</HeadingSecondary>
      </div>
      <div className={styles.header__links}>
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

        <div className={styles.header__links__smallscreen}>
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

export default HeaderIntro;
