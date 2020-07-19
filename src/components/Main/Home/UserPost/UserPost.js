import {
  headingSecondary as HeadingSecondary,
  link as Link
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

const UserPost = (props) => {
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
      setPost(data);
    }
  });

  console.log(isLoading, isError, data, error);

  const goBackHandler = () => {
    history.goBack();
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
          <p className={styles.post__text}>{post.description}</p>
        </div>

        <div className={styles.post__right}>
          <Link link='https://developerspath.com'>{post.owner}</Link>

          <p className={styles.post__text}>
            Developers: {post.numberOfDevelopers}
          </p>
          <p className={styles.post__text}>
            Developers needed: {post.numberOfDevelopersNeeded}
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
};

export default UserPost;
