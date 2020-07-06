import React from "react";
import styles from "./Technology.module.scss";

const Technology = (props) => {
  const used = props.techUsed.map((skill, index) => {
    return (
      <div key={index} className={styles.card}>
        <p className={styles.cardText}>{skill}</p>
      </div>
    );
  });

  const needed = props.techNeeded.map((skill, index) => {
    return (
      <div key={index} className={styles.card}>
        <p className={styles.cardText}>{skill}</p>
      </div>
    );
  });

  return (
    <div className={styles.tech}>
      <div className={styles.tech__container}>
        <p className={styles.tech__text}>Technology Used:</p>
        <div className={styles.tech__containerTech}>{used}</div>
      </div>
      <div className={styles.tech__container}>
        <p className={styles.tech__text}>Looking For:</p>
        <div className={styles.tech__containerTech}>{needed}</div>
      </div>
    </div>
  );
};

export default Technology;
