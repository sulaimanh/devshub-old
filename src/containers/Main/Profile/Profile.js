import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../components/UI/Text/Text";
import React, { Fragment, useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../helper/Auth";
import EditProfile from "./EditProfile/EditProfile";
import Modal from "../../../components/UI/Modal/Modal";
import RightPanel from "./RightPanel/RightPanel";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./Profile.module.scss";
import useGetUser from "../../../hooks/useGetUser";
import useGetUserPosts from "../../../hooks/useGetUserPosts";
import { useRouteMatch } from "react-router-dom";
import useUpdateUser from "../../../hooks/useUpdateUser";

const Profile = React.memo((props) => {
  const [posts, setPosts] = useState({
    teams: [],
    projects: [],
    challenges: []
  });
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const match = useRouteMatch("/profile/:ownerId");
  const { currentUser } = useContext(AuthContext);
  const userData = useGetUser(
    match ? match.params.ownerId : currentUser.ownerId
  );
  const userPostsData = useGetUserPosts(
    match ? match.params.ownerId : currentUser.ownerId
  );
  const [
    updateUser,
    updatedData /*{ status, updatedUserData, err }*/
  ] = useUpdateUser(user.ownerId);

  useEffect(() => {
    console.log("[Profile.js] useEffect");

    if (userPostsData.data) {
      setPosts({ ...userPostsData.data });
      setUser(userData.data);
    }
  }, [userPostsData.data, userData.data]);

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const updateUserHandler = async (input) => {
    await updateUser({ ...input, ownerId: user.ownerId });
    setShowModal((prevState) => !prevState);
  };

  if (userData.isLoading) {
    return <Spinner />;
  }

  const teamList = posts.teams.map((team, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <Paragraph className='small'>{team.title}</Paragraph>
      </div>
    );
  });
  const projectList = posts.projects.map((project, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <Paragraph className='small'>{project.title}</Paragraph>
      </div>
    );
  });
  const challengeList = posts.challenges.map((challenge, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <Paragraph className='small'>{challenge.title}</Paragraph>
      </div>
    );
  });

  return (
    <Fragment>
      {showModal ? (
        <Modal className='intro' handler={showModalHandler} show={showModal}>
          <EditProfile updateUserHandler={updateUserHandler} user={user} />
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

        <RightPanel
          user={user}
          isCurrentUser={currentUser.ownerId === user.ownerId}
          showEdit={showModalHandler}
        />
      </div>
    </Fragment>
  );
});

export default Profile;
