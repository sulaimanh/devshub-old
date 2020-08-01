import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary
} from "../../../components/UI/Text/Text";
import React, { useContext, useState } from "react";

import { AuthContext } from "../../../helper/Auth";
import Message from "./Message/Message";
import { ReactComponent as ReactEmptyLogo } from "../../../assets/img/empty.svg";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./Messages.module.scss";
import useGetUserPosts from "../../../hooks/useGetUserPosts";

const Messages = (props) => {
  const { isAuth, currentUser } = useContext(AuthContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const { isLoading, isError, data, status } = useGetUserPosts(
    currentUser.ownerId
  );

  if (isLoading) {
    return <Spinner />;
  }

  const postSelectedHandler = (post) => {
    setSelectedPost(post);
  };

  const teams = data.teams.map((team, index) => {
    return (
      <div
        tabIndex='-1'
        onClick={() => postSelectedHandler(team)}
        key={index}
        className={styles.messages__card}
      >
        <HeadingTertiary>{team.title}</HeadingTertiary>
      </div>
    );
  });

  const projects = data.projects.map((project, index) => {
    return (
      <div
        onClick={() => postSelectedHandler(project)}
        key={index}
        className={styles.messages__card}
        tabIndex='-1'
      >
        <HeadingTertiary>{project.title}</HeadingTertiary>
      </div>
    );
  });

  const challenges = data.challenges.map((challenge, index) => {
    return (
      <div
        tabIndex='-1'
        onClick={() => postSelectedHandler(challenge)}
        key={index}
        className={styles.messages__card}
      >
        <HeadingTertiary>{challenge.title}</HeadingTertiary>
      </div>
    );
  });

  if (teams.length === 0 && projects.length === 0 && challenges.length === 0) {
    return (
      <div className={styles.messages}>
        <div className={styles.messages__empty}>
          <HeadingTertiary>
            Here, you will find your posts and all users who are interested in
            joining... Seems like you do not have any posts yet.
          </HeadingTertiary>
          <ReactEmptyLogo className={styles.messages__emptyLogo} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.messages}>
      {/* <div className={styles.messages__dropDown}>Dropdown</div> */}
      <div className={styles.messages__left}>
        {teams}
        {projects}
        {challenges}
      </div>
      <div className={styles.messages__right}>
        <Message post={selectedPost} />
      </div>
    </div>
  );
};

export default Messages;
