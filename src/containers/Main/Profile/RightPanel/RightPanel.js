import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  link as Link,
  paragraph as Paragraph
} from "../../../../components/UI/Text/Text";

import Button from "../../../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from "./RightPanel.module.scss";

const RightPanel = (props) => {
  const profilePicture = props.user.picture
    ? props.user.picture
    : "data:image/jpeg;base64,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";
  return (
    <div className={styles.rightpanel}>
      <div className={styles.rightpanel__top}>
        <img
          alt='Profile'
          className={styles[`rightpanel__top--pic`]}
          src={profilePicture}
        />

        <div className={styles[`rightpanel__top--name`]}>
          <HeadingSecondary>{props.user.name}</HeadingSecondary>
        </div>
      </div>

      <div className={styles[`rightpanel__info`]}>
        <div className={styles[`rightpanel__info--message`]}>
          {!props.isCurrentUser ? (
            <Button
              handler={props.showMessage}
              type='button'
              category='tertiary'
              label='Message Me'
              size='large'
            />
          ) : (
            <Button
              handler={props.showEdit}
              category='tertiary'
              type='button'
              label='Edit Profile'
              size='large'
              icon={<FontAwesomeIcon icon={faEdit} size='1x' />}
            />
          )}
        </div>
        <div className={styles[`rightpanel__info--container`]}>
          {props.user.github ? (
            <div className={styles[`rightpanel__info--section`]}>
              <HeadingTertiary>GitHub</HeadingTertiary>
              <Link link={props.user.github}>My GitHub Profile</Link>
            </div>
          ) : null}

          {props.user.portfolio ? (
            <div className={styles[`rightpanel__info--section`]}>
              <HeadingTertiary>Portfolio</HeadingTertiary>
              <Link link={props.user.portfolio}>My Website</Link>
            </div>
          ) : null}

          {props.user.linkedin ? (
            <div className={styles[`rightpanel__info--section`]}>
              <HeadingTertiary>LinkedIn</HeadingTertiary>
              <Link link={props.user.linkedin}>LinkedIn</Link>
            </div>
          ) : null}

          {props.user.twitter ? (
            <div className={styles[`rightpanel__info--section`]}>
              <HeadingTertiary>Twitter</HeadingTertiary>
              <Link link={props.user.twitter}>Twitter</Link>
            </div>
          ) : null}

          {props.user.facebook ? (
            <div className={styles[`rightpanel__info--section`]}>
              <HeadingTertiary>Facebook</HeadingTertiary>
              <Link link={props.user.facebook}>Facebook</Link>
            </div>
          ) : null}

          <div className={styles[`rightpanel__info--section`]}>
            <HeadingTertiary>Contact</HeadingTertiary>
            <Paragraph>{props.user.email}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
