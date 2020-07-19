import React, { useEffect, useState } from "react";
import { queryCache, useMutation, useQuery } from "react-query";

import Card from "../../../../../components/UI/Card/Card";
import styles from "./Teams.module.scss";
import { useHistory } from "react-router-dom";

const Teams = (props) => {
  const history = useHistory();

  useEffect(() => {
    console.log("[Teams.js] useEffect");
    // Fetch teams
  });

  // - handle when project is selected
  const teamSelectedHandler = (event, projectId) => {
    history.push("/home/teams/" + projectId);
    console.log("QUERY CACHE", queryCache.getQueryData("posts"));
  };

  const view = props.cards.map((card, index) => {
    return (
      <Card
        key={index}
        handler={teamSelectedHandler}
        title={card.title}
        id={card.id}
        description={card.description}
        tech={card.techArr}
      />
    );
  });

  return <div className={styles.teams}>{view}</div>;
};

export default Teams;
