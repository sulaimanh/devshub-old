import {
  headingSecondary as HeadingSecondary,
  link as Link,
  paragraph as Paragraph
} from "../../../UI/Text/Text";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingTertiary as HeadingTertiary } from "../../../UI/Text/Text";
import MediumLink from "../../../UI/Links/Medium/MediumLink";
import MoreInfo from "../../../UI/MoreInfo/MoreInfo";
import Spinner from "../../../UI/Spinner/Spinner";
import Technology from "../../../UI/Technology/Technology";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserPost.module.scss";
import usePost from "../../../../hooks/usePost";

const UserPost = React.memo((props) => {
  const history = useHistory();
  const match = useRouteMatch("/home/:section/:postId");
  const [post, setPost] = useState({
    title: "",
    description: "",
    owner: "Sulaiman",
    requirements: "",
    techArr: [],
    repo: ""
  });
  const { isLoading, isError, data, error } = usePost(
    match.params.section,
    match.params.postId
  );

  // - Retrieve the data for the post
  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      setPost(data);
    }
  });

  const goBackHandler = () => {
    history.goBack();
  };

  const goToUserHandler = () => {
    console.log(post, post.ownerId);
    console.log(post.ownerId);
    history.push("/profile/" + post.ownerId);
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
          <MediumLink className='tertiary'>Send Request</MediumLink>
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
