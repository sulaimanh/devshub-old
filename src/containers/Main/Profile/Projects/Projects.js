import React, { Fragment, useContext, useState } from "react";

import { AuthContext } from "../../../../helper/Auth";
import Button from "../../../../components/UI/Button/Button";
import Modal from "../../../../components/UI/Modal/Modal";
import Project from "./Project/Project";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import styles from "./Projects.module.scss";
import useDeletePost from "../../../../hooks/useDeletePost";
import useGetUserPosts from "../../../../hooks/useGetUserPosts";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Projects = ({ isUserProfile }) => {
  const [showDeleteModal, setShowDeleteModal] = useState({
    show: false,
    section: "",
    postId: ""
  });
  const { currentUser } = useContext(AuthContext);
  const match = useRouteMatch("/profile/:ownerId");
  const history = useHistory();
  const { isLoading, isError, data, error } = useGetUserPosts(
    match ? match.params.ownerId : currentUser.ownerId
  );
  const [
    deletePost,
    updatedDeletedPost /*{ status, updatedUserData, err }*/
  ] = useDeletePost();

  const showDeleteModalHandler = (section, postId) => {
    setShowDeleteModal((prevState) => {
      return { show: !prevState.show, section: section, postId: postId };
    });
  };

  const deletePostHandler = async (section, postId) => {
    await deletePost({ section: section, postId: postId });
    console.log("DID IT DO IT!");
    setShowDeleteModal((prevState) => {
      return { show: !prevState.show, section: "", postId: "" };
    });
  };

  const goToPostHandler = (section, postId) => {
    history.push("/home/" + section + "/" + postId);
  };

  if (isLoading) return <Spinner />;

  return (
    <Fragment>
      {showDeleteModal.show ? (
        <Modal
          className={"delete"}
          handler={showDeleteModalHandler}
          show={showDeleteModal.show}
        >
          <div className={styles.projectsDelete}>
            <h1>Are you sure you want to delete this post?</h1>
            <div className={styles.projectsDelete__buttons}>
              <div className={styles.projectsDelete__button}>
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
              <div className={styles.projectsDelete__button}>
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
      <div>
        {data.teams.length !== 0 ? (
          <Project
            goToPostHandler={goToPostHandler}
            showDeleteModalHandler={showDeleteModalHandler}
            title='Teams'
            section='teams'
            data={data.teams}
            isUserProfile={isUserProfile}
          />
        ) : null}
        {data.projects.length !== 0 ? (
          <Project
            goToPostHandler={goToPostHandler}
            showDeleteModalHandler={showDeleteModalHandler}
            title='Projects'
            section='projects'
            data={data.projects}
            isUserProfile={isUserProfile}
          />
        ) : null}
        {data.challenges.length !== 0 ? (
          <Project
            goToPostHandler={goToPostHandler}
            showDeleteModalHandler={showDeleteModalHandler}
            title='Challenges'
            section='challenges'
            data={data.challenges}
            isUserProfile={isUserProfile}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default Projects;
