import { headingTertiary as HeadingTertiary } from "../Text/Text";
import React from "react";
import styles from "./Technology.module.scss";

const Technology = (props) => {
  const tech = props.tech.map((skill, index) => {
    return (
      <div key={index} className={styles.card}>
        <p className={styles.cardText}>{skill}</p>
      </div>
    );
  });

  return (
    <div className={styles.tech}>
      <div className={styles.tech__container}>
        <HeadingTertiary>Technology Used:</HeadingTertiary>
        <div className={styles.tech__containerTech}>{tech}</div>
      </div>
    </div>
  );
};

export default Technology;
