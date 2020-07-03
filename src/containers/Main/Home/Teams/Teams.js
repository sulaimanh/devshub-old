import React, { useEffect } from "react";
import styles from "./Teams.module.scss";
import Card from "../../../../components/UI/Card/Card";

const Teams = (props) => {
  return (
    <div className={styles.teams}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Teams;
