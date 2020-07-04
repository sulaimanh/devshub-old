import React, { useState } from "react";
import styles from "./Projects.module.scss";
import Card from "../../../../components/UI/Card/Card";
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Redirect
} from "react-router-dom";

const Projects = (props) => {

  // - handle when project is selected
  const projectSelectedHandler = (event, project) => {};

  return (
    <div>
      <Card />
    </div>
  );
};

export default Projects;
