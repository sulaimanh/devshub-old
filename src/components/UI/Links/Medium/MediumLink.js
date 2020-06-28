import React from "react";
import styles from "./MediumLink.module.scss";

const medium = (props) => {
  return (
    <a
      href={props.href}
      className={[styles.anchor, styles[`anchor__${props.className}`]].join(
        " "
      )}
      onClick={() => props.handler(props.action)}
    >
      {props.children}
    </a>
  );
};

export default medium;
