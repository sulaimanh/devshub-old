import React, { useEffect } from "react";
// import styles from "./Challenges.module.scss";
import Card from "../../../../components/UI/Card/Card";
import { useHistory } from "react-router-dom";

const Projects = React.memo((props) => {
  const history = useHistory();
  // const match = useRouteMatch("/home/projects/:projectId");

  // - Retrieve Projects
  useEffect(() => {
    console.log("HELLOOOO");
  }, []);

  // - handle when project is selected
  const projectSelectedHandler = (event, projectId) => {
    console.log(projectId);

    // - Here, I will dispatch an action to fetch the information
    //    about the specific project
    // - Then we will go to the route. Within the Project component,
    //    we will have access to that project via state.
    history.push("/home/projects/" + projectId);
  };

  return (
    <div>
      <Card
        title="Developers Path"
        description="Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everdayDevelopers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday."
        tech={[
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
        handler={projectSelectedHandler}
      />
      <Card
        title="Developers Path"
        description="
        Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everdayDevelopers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday."
        tech={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
        id="2"
        handler={projectSelectedHandler}
      />
    </div>
  );
});

export default Projects;
