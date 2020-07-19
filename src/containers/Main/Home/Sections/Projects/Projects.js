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
      <Card
        key={index}
        handler={projectSelectedHandler}
        title={card.title}
        id={card.id}
        description={card.description}
        tech={card.techArr}
      />
    );
  });

  return <div>{view}</div>;
});

export default Projects;
