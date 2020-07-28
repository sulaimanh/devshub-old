import React, { useEffect, useState } from "react";

// import styles from "./OpenSources.module.scss";
import Card from "../../../../../components/UI/Card/Card";
import { useHistory } from "react-router-dom";

const Challenges = React.memo((props) => {
  const history = useHistory();

  useEffect(() => {
    console.log("[Challenges.js] useEffect");
  });

  // - handle when project is selected
  const challengesSelectedHandler = (event, projectId) => {
    history.push("/home/challenges/" + projectId);
  };

  const view = props.cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        {card.docs.map((doc, index) => {
          return (
            <Card
              key={index}
              handler={challengesSelectedHandler}
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

  return <div>{view}</div>;
});

export default Challenges;
