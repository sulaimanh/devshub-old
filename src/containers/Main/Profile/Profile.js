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
import useDeletePost from "../../../hooks/useDeletePost";
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
  const [user, setUser] = useState({ arr: [], isUserProfile: false });
  const [showModal, setShowModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
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
  const [
    deletPost,
    updatedDeletedPost /*{ status, updatedUserData, err }*/
  ] = useDeletePost();

  useEffect(() => {
    console.log("[Profile.js] useEffect");

    if (userPostsData.data) {
      setPosts({
        ...userPostsData.data,
        isTeams: userPostsData.data.teams.length !== 0 ? true : false,
        isProjects: userPostsData.data.projects.length !== 0 ? true : false,
        isChallenges: userPostsData.data.challenges.length !== 0 ? true : false
      });
      if (match) {
        setUser({
          ...userData.data,
          isUserProfile:
            match.params.ownerId === currentUser.ownerId ? true : false
        });
      } else {
        setUser({
          ...userData.data,
          isUserProfile: true
        });
      }
    }
  }, [userPostsData.data, userData.data]);

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const showMessageModalHandler = () => {
    setShowMessageModal((prevState) => !prevState);
  };

  const updateUserHandler = async (input) => {
    await updateUser({ ...input, ownerId: user.ownerId });
    setShowModal((prevState) => !prevState);
  };

  const deletePostHandler = async (section, postId) => {
    await deletPost({ section: section, postId: postId });
  };

  if (userData.isLoading) {
    return <Spinner />;
  }

  const goToPostHandler = (section, postId) => {
    history.push("/home/" + section + "/" + postId);
  };

  const teamList = posts.teams.map((team, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <div
          className={styles.profile__maincontainer__listCardClick}
          onClick={() => goToPostHandler("teams", team.postId)}
        >
          <Paragraph className='medium'>{team.title}</Paragraph>
        </div>
        {user.isUserProfile ? (
          <div
            onClick={() => deletePostHandler("teams", team.postId)}
            className={styles.profile__maincontainer__listCardDelete}
          >
            <Paragraph className='small'>Delete</Paragraph>
          </div>
        ) : null}
      </div>
    );
  });
  const projectList = posts.projects.map((project, index, arr) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <div
          className={styles.profile__maincontainer__listCardClick}
          onClick={() => goToPostHandler("projects", project.postId)}
        >
          <Paragraph className='medium'>{project.title}</Paragraph>
        </div>
        {user.isUserProfile ? (
          <div
            onClick={() => deletePostHandler("projects", project.postId)}
            className={styles.profile__maincontainer__listCardDelete}
          >
            <Paragraph className='small'>Delete</Paragraph>
          </div>
        ) : null}
      </div>
    );
  });
  const challengeList = posts.challenges.map((challenge, index) => {
    return (
      <div key={index} className={styles.profile__maincontainer__listCard}>
        <div
          className={styles.profile__maincontainer__listCardClick}
          onClick={() => goToPostHandler("challenges", challenge.postId)}
        >
          <Paragraph className='medium'>{challenge.title}</Paragraph>
        </div>
        {user.isUserProfile ? (
          <div
            onClick={() => deletePostHandler("challenges", challenge.postId)}
            className={styles.profile__maincontainer__listCardDelete}
          >
            <Paragraph className='small'>Delete</Paragraph>
          </div>
        ) : null}
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

      {showMessageModal ? (
        <Modal
          className='intro'
          handler={showMessageModalHandler}
          show={showMessageModal}
        >
          <h1>
            We currently do not have any direct messaging set up. Please connect
            with {user.name} through their email or any other social media they
            have posted.
          </h1>
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
                <HeadingTertiary>Projects</HeadingTertiary>
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
          showMessage={showMessageModalHandler}
        />
      </div>
    </Fragment>
  );
});

export default Profile;
