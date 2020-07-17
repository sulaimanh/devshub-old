import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../components/UI/Text/Text";
import React, { useEffect, useState } from "react";

import RightPanel from "./RightPanel/RightPanel";
import styles from "./Profile.module.scss";

{
  /* <FontAwesomeIcon icon={faEdit} /> */
}

const Profile = (props) => {
  const [applications, setApplications] = useState({
    projects: [],
    teams: [],
    challenges: []
  });

  useEffect(() => {
    console.log("[Profile.js] useEffect");
    const applications = {
      teams: [
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        }
      ],
      projects: [
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        },
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        }
      ],
      challenges: [
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        },
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        },
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        }
      ]
    };

    setApplications({
      projects: applications.projects,
      teams: applications.teams,
      challenges: applications.challenges
    });
  }, []);

  const teamList = applications.teams.map((team, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <Paragraph>{team.title}</Paragraph>
      </div>
    );
  });
  const projectList = applications.projects.map((project, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <Paragraph>{project.title}</Paragraph>
      </div>
    );
  });
  const challengeList = applications.challenges.map((challenge, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <Paragraph>{challenge.title}</Paragraph>
      </div>
    );
  });

  return (
    <div className={styles.profile}>
      <div className={styles.profile__maincontainer}>
        <div className={styles.profile__header}></div>
        <div className={styles.profile__maincontainer__list}>
          <HeadingSecondary>Where you applied</HeadingSecondary>
          <div className={styles.profile__maincontainer__listSection}>
            <HeadingTertiary>Teams</HeadingTertiary>
            {teamList}
          </div>
          <div className={styles.profile__maincontainer__listSection}>
            <HeadingTertiary>Projects</HeadingTertiary>
            {projectList}
          </div>
          <div className={styles.profile__maincontainer__listSection}>
            <HeadingTertiary>Challenges</HeadingTertiary>
            {challengeList}
          </div>
        </div>
      </div>

      <RightPanel />
    </div>
  );
};

export default Profile;
