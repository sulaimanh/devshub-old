import React, { useEffect, useState } from "react";
import { queryCache, useMutation, useQuery } from "react-query";

import Card from "../../../../../components/UI/Card/Card";
import styles from "./Teams.module.scss";
import { useHistory } from "react-router-dom";

const Teams = React.memo((props) => {
  const history = useHistory();

  useEffect(() => {
    console.log("[Teams.js] useEffect");
  });

  // - handle when project is selected
  const teamSelectedHandler = (event, projectId) => {
    // console.log("QUERY CACHE", queryCache.getQueryData(["posts", "teams"]));
    history.push("/home/teams/" + projectId);
  };

  const view = props.cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        {card.docs.map((doc, index) => {
          return (
            <Card
              key={index}
              handler={teamSelectedHandler}
              title={doc.title}
              id={doc.id}
              description={doc.description}
              tech={doc.techArr}
            />
          );
        })}
      </React.Fragment>
    );
  });

  return <div className={styles.teams}>{view}</div>;
});

export default Teams;
