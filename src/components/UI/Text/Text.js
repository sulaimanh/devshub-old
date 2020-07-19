import React from "react";
import styles from "./Text.module.scss";

export const headingPrimary = (props) => {
  return <h1 className={styles.headingPrimary}>{props.children}</h1>;
};

export const headingSecondary = (props) => {
  return <h2 className={styles.headingSecondary}>{props.children}</h2>;
};

export const headingTertiary = (props) => {
  return (
    <h3
      className={[
        styles.headingTertiary,
        styles[`headingTertiary__${props.color}`]
      ].join(" ")}
    >
      {props.children}
    </h3>
  );
};

export const paragraph = (props) => {
  return (
    <p
      className={[
        styles.paragraph,
        styles[`paragraph__${props.className}`]
      ].join(" ")}
    >
      {props.children}
    </p>
  );
};

export const link = (props) => {
  return (
    <a href={props.link} className={styles.link}>
      {props.children}
    </a>
  );
};
