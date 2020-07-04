import React from "react";
import styles from "./Project.module.scss";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

const Project = (props) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className={styles.project}>
      <h1 onClick={goBackHandler}>HELLO</h1>
    </div>
  );
};

export default Project;
