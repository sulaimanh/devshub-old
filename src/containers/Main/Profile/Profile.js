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
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import useUpdateUser from "../../../hooks/useUpdateUser";

const Profile = React.memo((props) => {
  const [posts, setPosts] = useState({
    teams: [],
    projects: [],
    challenges: [],
    isTeams: false,
    isProjects: false,
    isChallenges: false
  });
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const match = useRouteMatch("/profile/:ownerId");
  const history = useHistory();
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
      console.log(userPostsData.data);
      setPosts({
        ...userPostsData.data,
        isTeams: userPostsData.data.teams.length !== 0 ? true : false,
        isProjects: userPostsData.data.projects.length !== 0 ? true : false,
        isChallenges: userPostsData.data.challenges.length !== 0 ? true : false
      });
      setUser(userData.data);
    }
  }, [userPostsData.data, userData.data]);

  console.log(posts.isTeams, posts.isProjects);

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

  const goToPostHandler = (section, postId) => {
    history.push("/home/" + section + "/" + postId);
  };

  const teamList = posts.teams.map((team, index) => {
    console.log(team);
    return (
      <div
        onClick={() => goToPostHandler("teams", team.postId)}
        key={index}
        className={styles.profile__maincontainer__listCard}
      >
        <Paragraph className='small'>{team.title}</Paragraph>
      </div>
    );
  });
  const projectList = posts.projects.map((project, index, arr) => {
    return (
      <div
        onClick={() => goToPostHandler("projects", project.postId)}
        key={index}
        className={styles.profile__maincontainer__listCard}
      >
        <Paragraph className='small'>{project.title}</Paragraph>
      </div>
    );
  });
  const challengeList = posts.challenges.map((challenge, index) => {
    return (
      <div
        onClick={() => goToPostHandler("challenges", challenge.postId)}
        key={index}
        className={styles.profile__maincontainer__listCard}
      >
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
            {posts.isTeams ? (
              <div className={styles.profile__maincontainer__listSection}>
                <HeadingTertiary>Teams</HeadingTertiary>
                {teamList}
              </div>
            ) : null}
            {posts.isProjects ? (
              <div className={styles.profile__maincontainer__listSection}>
                <HeadingTertiary>Teams</HeadingTertiary>
                {projectList}
              </div>
            ) : null}
            {posts.isChallenges ? (
              <div className={styles.profile__maincontainer__listSection}>
                <HeadingTertiary>Challenges</HeadingTertiary>
                {challengeList}
              </div>
            ) : null}
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
