import React from "react";
import styles from "./Medium.module.scss";

const medium = (props) => {
  return (
    <button
      className={[styles.button, styles[`button__${props.className}`]].join(
        " "
      )}
      onClick={props.handler}
    >
      {props.children}
    </button>
  );
};

export default medium;
