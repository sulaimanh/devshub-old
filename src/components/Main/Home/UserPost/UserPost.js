import {
  headingSecondary as HeadingSecondary,
  link as Link,
  paragraph as Paragraph
} from "../../../UI/Text/Text";
import React, { useContext, useEffect, useState } from "react";
import {
  faArrowCircleLeft,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, useRouteMatch } from "react-router-dom";

import Add from "../../../../containers/Main/Home/Add/Add";
import { AuthContext } from "../../../../helper/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingTertiary as HeadingTertiary } from "../../../UI/Text/Text";
import MediumLink from "../../../UI/Links/Medium/MediumLink";
import Spinner from "../../../UI/Spinner/Spinner";
import Technology from "../../../UI/Technology/Technology";
import styles from "./UserPost.module.scss";
import usePost from "../../../../hooks/usePost";
import useRemoveRequestToJoin from "../../../../hooks/useRemoveRequestToJoin";
import useSendRequestToJoin from "../../../../hooks/useSendRequestToJoin";

const UserPost = React.memo((props) => {
  const { isAuth, currentUser } = useContext(AuthContext);
  const history = useHistory();
  const match = useRouteMatch("/home/:section/:postId");
  const [icon, setIcon] = useState(true);
  const [post, setPost] = useState({
    title: "",
    description: "",
    owner: "Sulaiman",
    requirements: "",
    techArr: [],
    repo: "",
    users: []
  });
  const [showAdd, setShowAdd] = useState(false);
  const { isLoading, isError, data, error } = usePost(
    match.params.section,
    match.params.postId
  );

  const [sendJoinRequest, sendJoinRequestInfo] = useSendRequestToJoin(
    match.params.section,
    match.params.postId
  );
  const [removeJoinRequest, removeJoinRequestInfo] = useRemoveRequestToJoin(
    match.params.section,
    match.params.postId
  );

  useEffect(() => {
    if (!isLoading) {
      setPost(data);
    }
  });

  const goBackHandler = () => {
    history.goBack();
  };

  const goToUserHandler = () => {
    history.push("/profile/" + post.ownerId);
  };

  const editPostHandler = () => {
    setShowAdd((prevState) => !prevState);
  };

  const joinPostHandler = () => {
    sendJoinRequest({ ownerId: currentUser.ownerId, name: currentUser.name });
  };

  const leavePostHandler = () => {
    removeJoinRequest({ ownerId: currentUser.ownerId, name: currentUser.name });
  };

  const changeIconHandler = (isChecked) => {
    setIcon(isChecked);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      {showAdd ? (
        <Add
          handler={editPostHandler}
          post={post}
          section={match.params.section}
          postId={match.params.postId}
        />
      ) : null}
      <div className={styles.post}>
        <div className={styles.post__top}>
          <FontAwesomeIcon
            onClick={goBackHandler}
            className={styles.post__topIcon}
            icon={faArrowCircleLeft}
            size='3x'
          />
          <div className={styles.post__topRequest}>
            {post.users.some((user) => user.ownerId === currentUser.ownerId) ? (
              <FontAwesomeIcon
                onClick={leavePostHandler}
                className={styles.post__topCheck}
                icon={faCheckCircle}
                size='3x'
              />
            ) : currentUser.ownerId === post.ownerId ? (
              <MediumLink handler={editPostHandler} className='primary'>
                Edit Post
              </MediumLink>
            ) : (
              <MediumLink handler={joinPostHandler} className='tertiary'>
                Send Request
              </MediumLink>
            )}
          </div>
        </div>

        <div className={styles.post__details}>
          <div className={styles.post__left}>
            <div className={styles.post__leftHeading}>
              <HeadingSecondary>{post.title}</HeadingSecondary>
            </div>
            <Paragraph>{post.description}</Paragraph>
          </div>

          <div className={styles.post__right}>
            <Paragraph
              handler={goToUserHandler}
              className='link'
              handler={goToUserHandler}
            >
              {post.name}
            </Paragraph>

            <p className={styles.post__text}>
              Developers: {post.numOfDevelopers}
            </p>
            <p className={styles.post__text}>
              Developers needed: {post.numOfDevelopersNeeded}
            </p>
            <Link link={post.repo}>Go to Repository</Link>
          </div>
        </div>

        <div className={styles.post__req}>
          <HeadingTertiary>Requirements</HeadingTertiary>
          <p className={styles.post__text}>{post.requirements}</p>
        </div>
        <div className={styles.post__tech}>
          <Technology tech={post.techArr} />
        </div>
      </div>
    </React.Fragment>
  );
});

export default UserPost;
