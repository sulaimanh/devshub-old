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
            Number of developers: {props.post.numberOfDevelopers}
          </p>
          <p className={styles.post__text}>
            Number of developers needed: {props.post.numberOfDevelopersNeeded}
          </p>
          <div className={styles.post__right__repo}>
            <p className={styles.post__text}>Repository</p>
            <a href={props.post.githubLink}>
              <FontAwesomeIcon
                className={styles.post__right__repoIcon}
                icon={faGithub}
                size="3x"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.post__tech}>
        <Technology
          techUsed={props.post.techUsed}
          techNeeded={props.post.techNeeded}
        />
      </div>
    </div>
  );
};

export default UserPost;
