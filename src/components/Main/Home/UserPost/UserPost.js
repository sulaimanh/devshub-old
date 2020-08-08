import {
  headingSecondary as HeadingSecondary,
  link as Link,
  paragraph as Paragraph
} from "../../../UI/Text/Text";
import React, { useContext, useEffect, useState } from "react";
import {
  faArrowCircleLeft,
  faCheckCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, useRouteMatch } from "react-router-dom";

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

  const joinPostHandler = () => {
    sendJoinRequest(currentUser.ownerId);
  };

  const leavePostHandler = () => {
    removeJoinRequest(currentUser.ownerId);
  };

  const changeIconHandler = () => {
    setIcon((prevState) => !prevState);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__top}>
        <FontAwesomeIcon
          onClick={goBackHandler}
          className={styles.post__topIcon}
          icon={faArrowCircleLeft}
          size='3x'
        />
        <div className={styles.post__topRequest}>
          {post.users.includes(currentUser.ownerId) ? (
            <FontAwesomeIcon
              onMouseEnter={changeIconHandler}
              onMouseLeave={changeIconHandler}
              onClick={leavePostHandler}
              className={icon ? styles.post__topCheck : styles.post__topMinus}
              icon={icon ? faCheckCircle : faMinusCircle}
              size='3x'
            />
          ) : currentUser.ownerId === post.ownerId ? (
            <HeadingTertiary>You posted this</HeadingTertiary>
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
  );
});

export default UserPost;
