import React, { useState, useEffect } from "react";
import styles from "./MoreInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const MoreInfo = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(width);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, [width]);

  const handler = () => {};
  return (
    <div className={styles.moreInfo}>
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
