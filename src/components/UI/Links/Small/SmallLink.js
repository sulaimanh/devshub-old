import React from "react";
import styles from "./SmallLink.module.scss";

const medium = (props) => {
  return (
    <a
      href={props.href}
      className={[styles.anchor, styles[`anchor__${props.className}`]].join(
        " "
      )}
      onClick={(event) => props.handler(event, props.id)}
    >
      {props.children}
    </a>
  );
};

export default medium;
