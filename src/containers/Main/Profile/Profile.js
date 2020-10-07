import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../components/UI/Text/Text";
import React, { Fragment, useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../helper/Auth";
import EditProfile from "./EditProfile/EditProfile";
import Modal from "../../../components/UI/Modal/Modal";
import Projects from "./Projects/Projects";
import RightPanel from "./RightPanel/RightPanel";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./Profile.module.scss";
import useGetUser from "../../../hooks/useGetUser";
import { useRouteMatch } from "react-router-dom";
import useUpdateUser from "../../../hooks/useUpdateUser";

const Profile = React.memo((props) => {
  const [showModal, setShowModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const match = useRouteMatch("/profile/:ownerId");

  const { currentUser } = useContext(AuthContext);
  const userData = useGetUser(
    match ? match.params.ownerId : currentUser.ownerId
  );

  const [
    updateUser,
    updatedData /*{ status, updatedUserData, err }*/
  ] = useUpdateUser(currentUser.ownerId);

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const showMessageModalHandler = () => {
    setShowMessageModal((prevState) => !prevState);
  };

  const updateUserHandler = async (input) => {
    await updateUser({ ...input, ownerId: userData.data.ownerId });
    setShowModal((prevState) => !prevState);
  };

  if (userData.isLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {showModal ? (
        <Modal handler={showModalHandler} show={showModal}>
          <EditProfile
            updateUserHandler={updateUserHandler}
            user={userData.data}
          />
        </Modal>
      ) : null}

      {showMessageModal ? (
        <Modal handler={showMessageModalHandler} show={showMessageModal}>
          <h1>
            We currently do not have any direct messaging set up. Please connect
            with {userData.data.name} through their email or any other social
            media they have posted.
          </h1>
        </Modal>
      ) : null}

      <div className={styles.profile}>
        <div className={styles.profile__header}>
          <HeadingSecondary>Welcome</HeadingSecondary>
        </div>
        <div className={styles.profile__maincontainer}>
          <HeadingTertiary>Your Posts</HeadingTertiary>
          <div className={styles.profile__maincontainer__list}>
            <Projects
              isUserProfile={userData.data.ownerId == currentUser.ownerId}
            />
          </div>
        </div>

        <RightPanel
          user={userData.data}
          isCurrentUser={currentUser.ownerId === userData.data.ownerId}
          showEdit={showModalHandler}
          showMessage={showMessageModalHandler}
        />
      </div>
    </Fragment>
  );
});

export default Profile;
