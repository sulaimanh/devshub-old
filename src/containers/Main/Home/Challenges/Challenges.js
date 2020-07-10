import React, { useEffect } from "react";
// import styles from "./OpenSources.module.scss";
import Card from "../../../../components/UI/Card/Card";
import { useHistory } from "react-router-dom";

const Challenges = (props) => {
  const history = useHistory();

  // - Retrieve Projects
  useEffect(() => {});

  // - handle when project is selected
  const challengesSelectedHandler = (event, projectId) => {
    history.push("/home/challenges/" + projectId);
  };

  return (
    <div>
      <Card
        title="Developers Path"
        description="This is the description"
        tech={[
          "Reactjs",
          "Nodejs",
          "JavaScript",
          "Redux",
          "Reactjs",
          "Nodejs",
          "JavaScript",
          "Redux",
          "Reactjs",
          "Nodejs",
          "JavaScript",
          "Redux",
          "Reactjs",
          "Nodejs",
          "JavaScript",
          "Redux",
          "Reactjs",
          "Nodejs",
          "JavaScript",
          "Redux",
          "Reactjs",
          "Nodejs",
          "JavaScript",
          "Redux"
        ]}
        id="1"
        handler={challengesSelectedHandler}
      />
    </div>
  );
};

export default Challenges;
