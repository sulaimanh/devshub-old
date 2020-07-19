import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../components/UI/Text/Text";
import React, { Fragment, useEffect, useState } from "react";

import EditProfile from "./EditProfile/EditProfile";
import Modal from "../../../components/UI/Modal/Modal";
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
  const [showModal, setShowModal] = useState(false);

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

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

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
    <Fragment>
      {showModal ? (
        <Modal handler={showModalHandler} show={showModal}>
          <EditProfile />
        </Modal>
      ) : null}

      <div className={styles.profile}>
        <div className={styles.profile__header}>
          <HeadingSecondary>Welcome</HeadingSecondary>
        </div>
        <div className={styles.profile__maincontainer}>
          <HeadingTertiary>Posts</HeadingTertiary>
          <div className={styles.profile__maincontainer__list}>
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

        <RightPanel showEdit={showModalHandler} />
      </div>
    </Fragment>
  );
};

export default Profile;
