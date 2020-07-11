import React, { Fragment, useState, useEffect, useRef } from "react";
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
  const [showAdd, setShowAdd] = useState({ show: false, section: "Teams" });

  const showAddHandler = (event, id) => {
    setShowAdd((prevState) => {
      return { show: !prevState.show, section: id };
    });
  };

  return (
    <Fragment>
      {showAdd.show ? (
        <Add handler={showAddHandler} show={true} section={showAdd.section} />
      ) : null}

      <div className={styles.home}>
        <TopSelection showAddHandler={showAddHandler} />

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
