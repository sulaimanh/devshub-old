import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./MoreInfo.module.scss";

const MoreInfo = (props) => {
  const handler = () => {};
  return (
    <div className={styles.moreInfo}>
      <FontAwesomeIcon
        onClick={handler}
        className={styles.info}
        size="2x"
        icon={faInfoCircle}
      />{" "}
      <div className={[styles.container, styles[props.className]].join(" ")}>
        <p className={styles.container__text}>{props.children}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
