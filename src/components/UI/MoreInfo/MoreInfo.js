import React from "react";
import styles from "./MoreInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const MoreInfo = (props) => {
  const handler = () => {};
  return (
    <div>
      <FontAwesomeIcon
        onClick={handler}
        className={styles.info}
        size="2x"
        icon={faInfoCircle}
      />{" "}
      <div className={styles.container}>
        <p className={styles.container__text}>{props.children}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
