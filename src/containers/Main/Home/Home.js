import React, { Fragment, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import TopSelection from "../../../components/Main/Home/TopSelection/TopSelection";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";
import Add from "./Add/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouteMatch, useHistory } from "react-router-dom";
import Sections from "./Sections/Sections";

// - This will show the main contact
const Home = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("teams");
  const [section, setSection] = useState("Team");
  const [showAdd, setShowAdd] = useState(false);

  const history = useHistory();
  const match = useRouteMatch("/home/:section");

  useEffect(() => {
    console.log("[Home.js] useEffect");

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

  const selectedChoiceHandler = (choice) => {
    history.push("/home/" + choice);
    setSelectedChoice(choice);
    let view = "Team";
    if (choice === "projects") {
      view = "Project";
    } else if (choice === "challenges") {
      view = "Challenge";
    }
    setSection(view);
  };

  const showAddHandler = () => {
    setShowAdd((prevState) => !prevState);
  };

  return (
    <Fragment>
      {showAdd ? (
        <Add handler={showAddHandler} show={true} section={section} />
      ) : null}

      <div className={styles.home}>
        <TopSelection
          selectedChoice={selectedChoice}
          handler={selectedChoiceHandler}
        />
        <div className={styles.home__add}>
          <MediumLink handler={showAddHandler} className="tertiary">
            Add a {section}
          </MediumLink>
        </div>

        <div className={styles.home__list}>
          <Sections />
        </div>

        <div className={styles.home__buttons}>
          <MediumLink className="primary">
            <FontAwesomeIcon icon={faArrowLeft} />
          </MediumLink>
          <MediumLink className="primary">
            <FontAwesomeIcon icon={faArrowRight} />
          </MediumLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
