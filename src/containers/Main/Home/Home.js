import React, { Fragment, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import TopSelection from "./TopSelection/TopSelection";
import Teams from "./Teams/Teams";
import Projects from "./Projects/Projects";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Route, useRouteMatch, useHistory, Redirect } from "react-router-dom";
import Header from "../../../components/UI/Header/HeaderMain/HeaderMain";

// - This will show the main contact
const Dashboard = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("team");
  const history = useHistory();
  const match = useRouteMatch("/home/:section");

  useEffect(() => {
    if (match) {
      setSelectedChoice(match.params.section);
    } else {
      console.log("helllllllooo");

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
      <Header />
      <div className={styles.home}>
        <TopSelection
          selectedChoice={selectedChoice}
          handler={selectedChoiceHandler}
        />

        <Route path="/home/teams" component={Teams} />
        <Route path="/home/projects" component={Projects} />

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
