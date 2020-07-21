import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../components/UI/Text/Text";
import React, { Fragment, useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/Auth";
import EditProfile from "./EditProfile/EditProfile";
import Modal from "../../../components/UI/Modal/Modal";
import RightPanel from "./RightPanel/RightPanel";
import styles from "./Profile.module.scss";
import useGetUser from "../../../hooks/useGetUser";
import { useRouteMatch } from "react-router-dom";

const Profile = React.memo((props) => {
  const [applications, setApplications] = useState({
    projects: [],
    teams: [],
    challenges: []
  });
  const [showModal, setShowModal] = useState(false);
  const match = useRouteMatch("/profile/:userId");
  const { currentUser } = useContext(AuthContext);
  const { isLoading, isError, data, error } = useGetUser(
    match ? match.params.userId : currentUser.ownerId
  );

  useEffect(() => {
    console.log("[Profile.js] useEffect");
    if (data) {
      setApplications({
        projects: data.projects,
        teams: data.teams,
        challenges: data.challenges
      });
    }
  }, [data]);

  console.log(data);

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
});

export default Profile;
