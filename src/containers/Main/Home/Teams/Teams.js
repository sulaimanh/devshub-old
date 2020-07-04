import React, { useEffect } from "react";
import styles from "./Teams.module.scss";
import Card from "../../../../components/UI/Card/Card";
import { useRouteMatch, useHistory } from "react-router-dom";

const Teams = (props) => {
  const history = useHistory();

  // - Retrieve Teams
  useEffect(() => {});

  // - handle when project is selected
  const teamSelectedHandler = (event, projectId) => {
    history.push("/home/teams/" + projectId);
  };

  return (
    <div className={styles.teams}>
      <Card
        title="Developers Path"
        description="This is the description"
        techUsed={["Reactjs", "JavaScript", "Redux"]}
        techNeeded={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
        id="1"
        handler={teamSelectedHandler}
      />
      <Card
        title="Developers Path"
        description="This is the description"
        techUsed={["Reactjs", "JavaScript", "Redux"]}
        techNeeded={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
        id="2"
        handler={teamSelectedHandler}
      />
    </div>
  );
};

export default Teams;
