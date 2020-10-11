import { Link, useRouteMatch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Sections from "./Sections/Sections";
import TopSelection from "../../../components/Main/Home/TopSelection/TopSelection";
import styles from "./Home.module.scss";

const Home = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("teams");
  const [section, setSection] = useState("Team");
  const [showAdd, setShowAdd] = useState(false);
  const match = useRouteMatch("/home/:section");

  const selections = [
    {
      heading: "Teams",
      choice: "teams",
      path: "/home/teams",
      buttonName: "Team"
    },
    {
      heading: "Projects",
      choice: "projects",
      path: "/home/projects",
      buttonName: "Project"
    },
    {
      heading: "Challenges",
      choice: "challenges",
      path: "/home/challenges",
      buttonName: "Challenge"
    }
  ];

  useEffect(() => {
    if (match) {
      let route = match.params.section;
      setSelectedChoice(route);
      let view = "Team";
      if (route === "projects") {
        view = "Project";
      } else if (route === "challenges") {
        view = "Challenge";
      }
      setSection(view);
    }
  }, [match]);

  const selectedChoiceHandler = (choice, heading) => {
    setSelectedChoice(choice);
    setSection(heading);
  };

  const showAddHandler = (event, id) => {
    setShowAdd((prevState) => !prevState);
  };

  return (
    <div className={styles.home}>
      <TopSelection
        selectedChoice={selectedChoice}
        section={section}
        showAdd={showAdd}
        selectedChoiceHandler={selectedChoiceHandler}
        showAddHandler={showAddHandler}
        selections={selections}
      />

      <div className={styles.home__list}>
        <Sections />
      </div>
    </div>
  );
};

export default Home;
