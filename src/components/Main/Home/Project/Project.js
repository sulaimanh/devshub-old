import React, { useEffect } from "react";
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { headingSecondary as HeadingSecondary } from "../../../UI/Text/Text";
import MediumLink from "../../../UI/Links/Medium/MediumLink";
import MoreInfo from "../../../UI/MoreInfo/MoreInfo";

const Project = (props) => {
  const history = useHistory();

  // - Retrieve the data for the project
  useEffect(() => {});

  const goBackHandler = () => {
    history.goBack();
  };

  const project = {
    id: 1,
    owner: "Sulaiman Hamouda",
    numberOfDevelopers: 3,
    title: "Developers Path",
    description:
      "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
    isConfidential: true,
    techUsed: ["Reactjs", "Nodejs", "JavaScript", "Redux"],
    techNeeded: ["Reactjs", "JavaScript", "Redux"],
    githubLink: "https://github.com/developerspath/developerspath-frontend",
    numberOfDevelopersNeeded: 2
  };

  const techUsed = project.techUsed.map((skill, index) => {
    return (
      <div key={index} className={styles.project__card}>
        <p className={styles.project__cardText}>{skill}</p>
      </div>
    );
  });

  const techNeeded = project.techNeeded.map((skill, index) => {
    return (
      <div key={index} className={styles.project__card}>
        <p className={styles.project__cardText}>{skill}</p>
      </div>
    );
  });

  return (
    <div className={styles.project}>
      <div className={styles.project__top}>
        <FontAwesomeIcon
          onClick={goBackHandler}
          className={styles.project__topIcon}
          icon={faArrowCircleLeft}
          size="3x"
        />
        <div className={styles.project__topRequest}>
          <MediumLink className="tertiary">Send Request</MediumLink>
        </div>
      </div>
      <div className={styles.project__details}>
        <div className={styles.project__left}>
          <HeadingSecondary>{project.title}</HeadingSecondary>

          <p className={styles.project__text}>{project.description}</p>

          <div className={styles.project__tech}>
            <div className={styles.project__techRow}>
              <p className={styles.project__text}>Tech Used:</p>
              {techUsed}
            </div>
            <div className={styles.project__techRow}>
              <p className={styles.project__text}>Tech Needed:</p>
              {techNeeded}
            </div>
          </div>
        </div>

        <div className={styles.project__right}>
          <p className={styles.project__text}>Owner: {project.owner}</p>
          {project.isConfidential ? (
            <div className={styles.project__confidential}>
              <p className={styles.project__text}>Confidential</p>
              <div className={styles.project__confidential__moreInfo}>
                <MoreInfo>
                  This is a confidential project. If you are interested, please
                  send a request to the project owner to get more information.
                </MoreInfo>
              </div>
            </div>
          ) : null}
          <div className={styles.project__repo}>
            <p className={styles.project__text}>Repository</p>

            <a href={project.githubLink}>
              <FontAwesomeIcon
                className={styles.project__repoIcon}
                icon={faGithub}
                size="3x"
              />
            </a>
          </div>
          <p className={styles.project__text}>
            Number of developers: {project.numberOfDevelopers}
          </p>
          <p className={styles.project__text}>
            Number of developers needed: {project.numberOfDevelopersNeeded}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
