import React, { useEffect, useState } from "react";

import Card from "../../../../../components/UI/Card/Card";
// import styles from "./Projects.module.scss";
import { useHistory } from "react-router-dom";

const Projects = React.memo((props) => {
  const history = useHistory();
  // const match = useRouteMatch("/home/projects/:projectId");

  // - Retrieve Projects

  useEffect(() => {
    console.log("[Projects.js] useEffect");
  });

  // - handle when project is selected
  const projectSelectedHandler = (event, projectId) => {
    history.push("/home/projects/" + projectId);
  };

  const view = props.cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        {card.docs.map((doc, index) => {
          return (
            <Card
              key={index}
              handler={projectSelectedHandler}
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

export default Projects;
