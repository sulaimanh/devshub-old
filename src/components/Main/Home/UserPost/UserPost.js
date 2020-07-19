import {
  headingSecondary as HeadingSecondary,
  link as Link
} from "../../../UI/Text/Text";
import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingTertiary as HeadingTertiary } from "../../../UI/Text/Text";
import MediumLink from "../../../UI/Links/Medium/MediumLink";
import MoreInfo from "../../../UI/MoreInfo/MoreInfo";
import Technology from "../../../UI/Technology/Technology";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserPost.module.scss";

const UserPost = (props) => {
  const history = useHistory();

  // - Retrieve the data for the post
  useEffect(() => {});

  const goBackHandler = () => {
    history.goBack();
  };

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
            <HeadingSecondary>{props.post.title}</HeadingSecondary>
          </div>
          <p className={styles.post__text}>{props.post.description}</p>
        </div>

        <div className={styles.post__right}>
          <Link link='https://developerspath.com'>{props.post.owner}</Link>

          <p className={styles.post__text}>
            Developers: {props.post.numberOfDevelopers}
          </p>
          <p className={styles.post__text}>
            Developers needed: {props.post.numberOfDevelopersNeeded}
          </p>
          <Link link={props.post.githubLink}>Go to Repository</Link>
        </div>
      </div>

      <div className={styles.post__req}>
        <HeadingTertiary>Requirements</HeadingTertiary>
        <p className={styles.post__text}>{props.post.requirements}</p>
      </div>
      <div className={styles.post__tech}>
        <Technology tech={props.post.tech} />
      </div>
    </div>
  );
};

export default UserPost;
