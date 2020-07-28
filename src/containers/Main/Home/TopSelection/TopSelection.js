import { Link, useRouteMatch } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

import Add from "../Add/Add";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import Modal from "../../../../components/UI/Modal/Modal";
import styles from "./TopSelection.module.scss";

// - This will show the main contact
const TopSelection = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("teams");
  const [section, setSection] = useState("Team");
  const [showAdd, setShowAdd] = useState(false);
  const match = useRouteMatch("/home/:section");

  useEffect(() => {
    console.log("[TopSelection.js] useEffect");
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
  }, []);

  const selectedChoiceHandler = (choice, heading) => {
    setSelectedChoice(choice);
    setSection(heading);
  };

  const showAddHandler = (event, id) => {
    setShowAdd((prevState) => !prevState);
  };

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

  const view = selections.map((selection, index) => {
    return (
      <Link
        key={index}
        onClick={() =>
          selectedChoiceHandler(selection.choice, selection.buttonName)
        }
        className={[
          styles.topLink,
          selectedChoice === selection.choice ? styles.topLink__selected : null
        ].join(" ")}
        to={selection.path}
      >
        <p className={styles.topText}>{selection.heading}</p>
      </Link>
    );
  });

  let addView = {};

  return (
    <Fragment>
      {showAdd ? <Add handler={showAddHandler} section={section} /> : null}

      <div className={styles.top}>
        <div className={styles.top__links}>{view}</div>
      </div>
      <div className={styles.top__add}>
        <MediumLink handler={showAddHandler} className='tertiary'>
          Post a {section}
        </MediumLink>
      </div>
    </Fragment>
  );
};

export default TopSelection;
