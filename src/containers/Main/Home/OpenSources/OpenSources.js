import React, { useEffect } from "react";
// import styles from "./OpenSources.module.scss";
import Card from "../../../../components/UI/Card/Card";
import { useHistory } from "react-router-dom";

const OpenSource = (props) => {
  const history = useHistory();

  // - Retrieve Projects
  useEffect(() => {});

  // - handle when project is selected
  const opensourceSelectedHandler = (event, projectId) => {
    history.push("/home/opensource/" + projectId);
  };

  return (
    <div>
      <Card
        title="Developers Path"
        description="This is the description"
        techNeeded={[
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
        techUsed={[
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
        handler={opensourceSelectedHandler}
      />
    </div>
  );
};

export default OpenSource;
