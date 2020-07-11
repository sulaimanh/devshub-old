import React, { Suspense, useState, useEffect } from "react";
import styles from "./Teams.module.scss";
import Card from "../../../../../components/UI/Card/Card";
import { useHistory } from "react-router-dom";

import { useQuery, useMutation, queryCache } from "react-query";
import axios from "axios";

const Teams = (props) => {
  const [cards, setCards] = useState([]);
  const history = useHistory();

  // const { isLoading, isError, data, error } = useQuery("prac", async () => {
  //   const { data } = await axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log("heelo");
  //       console.log(err);
  //     });

  //   return data;
  // });

  // console.log(isLoading, isError, data, error);

  // - Retrieve Teams
  useEffect(() => {
    console.log("[Teams.js] useEffect");
    const card = [
      {
        id: 1,
        title: "Developers Path",
        description: "Connecting Developers to opportunities",
        tech: ["Reactjs", "Nodejs", "JavaScript", "Redux"]
      }
    ];
    setCards(card);
  }, []);

  // - handle when project is selected
  const teamSelectedHandler = (event, projectId) => {
    history.push("/home/teams/" + projectId);
  };

  const view = cards.map((card, index) => {
    return (
      <Card
        key={index}
        handler={teamSelectedHandler}
        title={card.title}
        id={card.id}
        description={card.description}
        tech={card.tech}
      />
    );
  });

  return (
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
  );
};

export default Teams;
