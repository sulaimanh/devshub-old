import React, { useEffect } from "react";
import styles from "./UserPost.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import { headingSecondary as HeadingSecondary } from "../../../UI/Text/Text";
import MediumLink from "../../../UI/Links/Medium/MediumLink";
import MoreInfo from "../../../UI/MoreInfo/MoreInfo";
import Technology from "../../../UI/Technology/Technology";

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
          size="3x"
        />
        <div className={styles.post__topRequest}>
          <MediumLink className="tertiary">Send Request</MediumLink>
        </div>
      </div>
      <div className={styles.post__details}>
        <div className={styles.post__left}>
          <div className={styles.post__leftHeading}>
            <HeadingSecondary>{props.post.title}</HeadingSecondary>
            {props.post.isConfidential ? (
              <div className={styles.post__leftHeading__confidential}>
                <p className={styles.post__leftHeading__confidentialText}>
                  Private
                </p>
                <div
                  className={styles.post__leftHeading__confidential__moreInfo}
                >
                  <MoreInfo>
                    This is a private post. If you are interested, please send a
                    request to the post owner to get more information.
                  </MoreInfo>
                </div>
              </div>
            ) : null}
          </div>
          <p className={styles.post__text}>{props.post.description}</p>
        </div>

        <div className={styles.post__right}>
          <p className={styles.post__text}>Owner: {props.post.owner}</p>

          <p className={styles.post__text}>
            Developers: {props.post.numberOfDevelopers}
          </p>
          <p className={styles.post__text}>
            Developers needed: {props.post.numberOfDevelopersNeeded}
          </p>
          <a href={props.post.githubLink} className={styles.post__textRepo}>
            <p>Go to Repository</p>
          </a>
        </div>
      </div>
      <div className={styles.post__tech}>
        <Technology tech={props.post.tech} />
      </div>
    </div>
  );
};

export default UserPost;
