import React from "react";
import styles from "./Medium.module.scss";

const medium = (props) => {
  return (
    <button className={styles.button} onClick={props.handler}>
      {props.children}
    </button>
  );
};

export default medium;
