import React, { Fragment, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import TopSelection from "../../../components/Main/Home/TopSelection/TopSelection";
import SearchInput from "../../../components/UI/Inputs/SearchInput/SearchInput";
import Teams from "./Teams/Teams";
import Projects from "./Projects/Projects";
import OpenSource from "./OpenSource/OpenSource";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Route, useRouteMatch, useHistory, Redirect } from "react-router-dom";

// - This will show the main contact
const Dashboard = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("team");
  const history = useHistory();
  const match = useRouteMatch("/home/:section");

  useEffect(() => {
    if (match) {
      setSelectedChoice(match.params.section);
    } else {
      history.push("/home/teams");
      setSelectedChoice("teams");
    }
  }, []);

  const selectedChoiceHandler = (choice) => {
    history.push("/home/" + choice);
    setSelectedChoice(choice);
  };

  return (
    <Fragment>
      <div className={styles.home}>
        <TopSelection
          selectedChoice={selectedChoice}
          handler={selectedChoiceHandler}
        />
        <div className={styles.home__search}>
          <SearchInput />
        </div>

        <div className={styles.home__list}>
          <Route path="/home/teams" component={Teams} />
          <Route path="/home/projects" component={Projects} />
          <Route path="/home/sources" component={OpenSource} />
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

export default Dashboard;