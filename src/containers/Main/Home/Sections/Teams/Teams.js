import React, { useEffect, useState } from "react";

import Card from "../../../../../components/UI/Card/Card";
import styles from "./Teams.module.scss";
import { useHistory } from "react-router-dom";

// import { useQuery, useMutation, queryCache } from "react-query";
// import axios from "axios";

const Teams = (props) => {
  const history = useHistory();

  useEffect(() => {
    console.log("[Teams.js] useEffect");
  });

  // - handle when project is selected
  const teamSelectedHandler = (event, projectId) => {
    history.push("/home/teams/" + projectId);
  };

  const view = props.cards.map((card, index) => {
    return (
      <Card
        key={index}
        handler={teamSelectedHandler}
        title={card.title}
        id={card.id}
        description={card.description}
        tech={card.tech}
      />
    );
  });

  return <div className={styles.teams}>{view}</div>;
};

export default Teams;
