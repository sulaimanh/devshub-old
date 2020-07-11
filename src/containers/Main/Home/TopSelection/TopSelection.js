import React, { useState, useEffect, Fragment } from "react";
import styles from "./TopSelection.module.scss";
import { Link } from "react-router-dom";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import { useRouteMatch, useHistory } from "react-router-dom";
import Add from "../Add/Add";

// - This will show the main contact
const TopSelection = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("teams");
  const [section, setSection] = useState("Team");
  const [showAdd, setShowAdd] = useState({ show: false, section: "Teams" });
  const match = useRouteMatch("/home/:section");

  useEffect(() => {
    console.log("[TopSelection.js] useEffect");

    let route = match.params.section;
    setSelectedChoice(route);
    let view = "Team";
    if (route === "projects") {
      view = "Project";
    } else if (route === "challenges") {
      view = "Challenge";
    }
    setSection(view);
  }, [match.params.section]);

  const selectedChoiceHandler = (choice, heading) => {
    setSelectedChoice(choice);
    setSection(heading);
  };

  const showAddHandler = (event, id) => {
    setShowAdd((prevState) => {
      return { show: !prevState.show, section: id };
    });
  };

  const selections = [
    { heading: "Teams", choice: "teams", path: "/home/teams" },
    { heading: "Projects", choice: "projects", path: "/home/projects" },
    { heading: "Challenges", choice: "challenges", path: "/home/challenges" }
  ];

  const view = selections.map((selection, index) => {
    return (
      <Link
        onClick={() =>
          selectedChoiceHandler(selection.choice, selection.heading)
        }
        key={index}
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

  return (
    <Fragment>
      {showAdd.show ? (
        <Add handler={showAddHandler} show={true} section={showAdd.section} />
      ) : null}

      <div className={styles.top}>
        <div className={styles.top__links}>{view}</div>
        <div className={styles.top__add}>
          <MediumLink
            id={section}
            handler={showAddHandler}
            className="tertiary"
          >
            Add a {section}
          </MediumLink>
        </div>
      </div>
    </Fragment>
  );
};

export default TopSelection;
