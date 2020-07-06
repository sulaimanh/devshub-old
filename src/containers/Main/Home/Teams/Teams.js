import React, { Suspense, useState, useEffect } from "react";
import styles from "./Teams.module.scss";
import Card from "../../../../components/UI/Card/Card";
import { useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

const Teams = (props) => {
  const [cards, setCards] = useState([]);
  const history = useHistory();

  // - Retrieve Teams
  useEffect(() => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res.data.data[0].employee_name);
        const card = [
          {
            id: 1,
            title: "Developers Path",
            description: "Connecting Developers to opportunities",
            techUsed: ["Reactjs", "JavaScript", "Redux"],
            techNeeded: ["Reactjs", "Nodejs", "JavaScript", "Redux"]
          }
        ];
        setCards(card);
      });
  }, []);

  // - handle when project is selected
  const teamSelectedHandler = (event, projectId) => {
    history.push("/home/teams/" + projectId);
  };
  console.log(cards, "HASFHASHFAH");

  const view = cards.map((card, index) => (
    <Card
      key={index}
      handler={teamSelectedHandler}
      title={card.title}
      id={card.id}
      description={card.description}
      techUsed={card.techUsed}
      techNeeded={card.techNeeded}
    />
  ));

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <div className={styles.teams}>
        {view}
        {/* <Card
          title={cards}
          description="This is the description"
          techUsed={["Reactjs", "JavaScript", "Redux"]}
          techNeeded={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
          id="1"
          handler={teamSelectedHandler}
        /> */}
        {/* <Card
          title="Developers Path"
          description="This is the description"
          techUsed={["Reactjs", "JavaScript", "Redux"]}
          techNeeded={["Reactjs", "Nodejs", "JavaScript", "Redux"]}
          id="2"
          handler={teamSelectedHandler}
        /> */}
      </div>
    </Suspense>
  );
};

export default Teams;
