import React, { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import Card from "../../../../components/UI/Card/Card";
import Project from "../../../../components/Main/Home/Project/Project";
import { useRouteMatch, useHistory } from "react-router-dom";

const Projects = (props) => {
  const history = useHistory();
  const match = useRouteMatch("/home/projects/:projectId");

  // - Retrieve Projects
  useEffect(() => {});

  // - handle when project is selected
  const projectSelectedHandler = (event, projectId) => {
    history.push("/home/projects/" + projectId);
  };

  return (
    <div>
      <Card
        title="Developers Path"
        description="This is the description"
        techUsed={["Reactjs", "JavaScript", "Redux"]}
        techNeeded={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
        id="1"
        handler={projectSelectedHandler}
      />
      <Card
        title="Developers Path"
        description="This is the description"
        techUsed={["Reactjs", "JavaScript", "Redux"]}
        techNeeded={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
        id="2"
        handler={projectSelectedHandler}
      />
    </div>
  );
};

export default Projects;
