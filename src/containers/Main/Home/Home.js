import React, { Fragment, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import TopSelection from "../../../components/Main/Home/TopSelection/TopSelection";
import SearchInput from "../../../components/UI/Inputs/SearchInput/SearchInput";
import Teams from "./Teams/Teams";
import Projects from "./Projects/Projects";
import OpenSources from "./OpenSources/OpenSources";
import MediumLink from "../../../components/UI/Links/Medium/MediumLink";
import Add from "./Add/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

// - This will show the main contact
const Dashboard = (props) => {
  const [selectedChoice, setSelectedChoice] = useState("team");
  const [search, setSearch] = useState("");
  const [section, setSection] = useState("Team");
  const [showAdd, setShowAdd] = useState(false);
  const history = useHistory();
  const match = useRouteMatch("/home/:section");

  useEffect(() => {
    console.log("[Home.js] useEffect");

    if (match) {
      const route = match.params.section;
      setSelectedChoice(route);
      let view = "Team";

      if (route === "projects") {
        view = "Project";
      } else if (route === "opensource") {
        view = "Open Source";
      }
      setSection(view);
    } else {
      history.push("/home/teams");
      setSelectedChoice("teams");
    }
  }, [match, history]);

  const selectedChoiceHandler = (choice) => {
    history.push("/home/" + choice);
    setSelectedChoice(choice);
  };

  const showAddHandler = () => {
    setShowAdd((prevState) => !prevState);
  };

  const filterHandler = (event) => {
    setSearch(event.target.value);
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
        <div className={styles.home__search}>
          <SearchInput
            info="Filter your search based on difficulty or tech you are interested in"
            value={search}
            handler={filterHandler}
            isSubmitButton={false}
            placeholder="Filter your search"
          />
        </div>
        <div className={styles.home__add}>
          <MediumLink handler={showAddHandler} className="tertiary">
            Add {section}
          </MediumLink>
        </div>

        <div className={styles.home__list}>
          <Switch>
            <Route path="/home/teams" component={Teams} />
            <Route path="/home/projects" component={Projects} />
            <Route path="/home/opensource" component={OpenSources} />
          </Switch>
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
