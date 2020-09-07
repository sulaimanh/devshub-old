import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../components/UI/Text/Text";
import React, { Fragment, useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../helper/Auth";
import Button from "../../../components/UI/Button/Button";
import EditProfile from "./EditProfile/EditProfile";
import MiniCard from "../../../components/UI/MiniCard/MiniCard";
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
  const [showDeleteModal, setShowDeleteModal] = useState({
    show: false,
    section: "",
    postId: ""
  });
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

  const showDeleteModalHandler = (section, postId) => {
    setShowDeleteModal((prevState) => {
      return { show: !prevState.show, section: section, postId: postId };
    });
  };

  const updateUserHandler = async (input) => {
    await updateUser({ ...input, ownerId: user.ownerId });
    setShowModal((prevState) => !prevState);
  };

  const deletePostHandler = async (section, postId) => {
    await deletPost({ section: section, postId: postId });
    setShowDeleteModal((prevState) => {
      return { show: !prevState.show, section: "", postId: "" };
    });
  };

  if (userData.isLoading) {
    return <Spinner />;
  }

  const goToPostHandler = (section, postId) => {
    history.push("/home/" + section + "/" + postId);
  };

  const teamList = posts.teams.map((team, index) => {
    return (
      <MiniCard
        key={index}
        data={team}
        section='teams'
        user={user}
        goToPostHandler={goToPostHandler}
        deletePostHandler={showDeleteModalHandler}
      />
    );
  });
  const projectList = posts.projects.map((project, index, arr) => {
    return (
      <MiniCard
        key={index}
        data={project}
        section='projects'
        user={user}
        goToPostHandler={goToPostHandler}
        deletePostHandler={showDeleteModalHandler}
      />
    );
  });
  const challengeList = posts.challenges.map((challenge, index) => {
    return (
      <MiniCard
        key={index}
        data={challenge}
        section='challenges'
        user={user}
        goToPostHandler={goToPostHandler}
        deletePostHandler={showDeleteModalHandler}
      />
    );
  });

  return (
    <Fragment>
      {showModal ? (
        <Modal handler={showModalHandler} show={showModal}>
          <EditProfile updateUserHandler={updateUserHandler} user={user} />
        </Modal>
      ) : null}

      {showMessageModal ? (
        <Modal handler={showMessageModalHandler} show={showMessageModal}>
          <h1>
            We currently do not have any direct messaging set up. Please connect
            with {user.name} through their email or any other social media they
            have posted.
          </h1>
        </Modal>
      ) : null}

      {showDeleteModal.show ? (
        <Modal handler={showDeleteModalHandler} show={showDeleteModal.show}>
          <div className={styles.profileDelete}>
            <h1>Are you sure you want to delete this post?</h1>
            <div className={styles.profileDelete__buttons}>
              <div className={styles.profileDelete__button}>
                <Button
                  type='button'
                  category='delete'
                  size='small'
                  label='Yes'
                  handler={() =>
                    deletePostHandler(
                      showDeleteModal.section,
                      showDeleteModal.postId
                    )
                  }
                />
              </div>
              <div className={styles.profileDelete__button}>
                <Button
                  type='button'
                  category='secondary'
                  size='small'
                  label='No'
                  handler={() => showDeleteModalHandler("", "")}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : null}

      <div className={styles.profile}>
        <div className={styles.profile__header}>
          <HeadingSecondary>Welcome</HeadingSecondary>
        </div>
        <div className={styles.profile__maincontainer}>
          <HeadingTertiary>Your Posts</HeadingTertiary>
          <div className={styles.profile__maincontainer__list}>
            {posts.isTeams ? (
              <div className={styles.profile__maincontainer__listSection}>
                <HeadingTertiary>Teams</HeadingTertiary>
                <div
                  className={styles.profile__maincontainer__listSectionCards}
                >
                  {teamList}
                </div>
              </div>
            ) : null}
            {posts.isProjects ? (
              <div className={styles.profile__maincontainer__listSection}>
                <HeadingTertiary>Projects</HeadingTertiary>
                <div
                  className={styles.profile__maincontainer__listSectionCards}
                >
                  {projectList}
                </div>
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
