import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  link as Link,
  paragraph as Paragraph
} from "../../../../components/UI/Text/Text";
import React, { useContext, useEffect } from "react";
import { faBars, faEdit } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../../../helper/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import styles from "./RightPanel.module.scss";

const RightPanel = (props) => {
  useEffect(() => {});

  return (
    <div className={styles.rightpanel}>
      <div className={styles.rightpanel__top}>
        <img
          className={styles.rightpanel__topPic}
          src='https://media-exp1.licdn.com/dms/image/C4E03AQEfnBKVMWWjNw/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=3q2t78jeF3ltIU-DG29QF_N-yyXwj9C4raOviCLC9UY'
        />

        <div className={styles.rightpanel__topNameEdit}>
          <HeadingSecondary>{props.user.name}</HeadingSecondary>
          {props.isCurrentUser ? (
            <p onClick={props.showEdit} className={styles.rightpanel__topEdit}>
              <FontAwesomeIcon icon={faEdit} size='1x' /> Edit Profie
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.rightpanel__info}>
        <div className={styles.rightpanel__infoMessage}>
          {props.isCurrentUser ? null : (
            <MediumLink className='tertiary'>Message Me</MediumLink>
          )}
        </div>
        {/* <div className={styles.rightpanel__infoSection}>
          <HeadingTertiary>Applications</HeadingTertiary>

          <div className={styles.rightpanel__infoApplied}>
            <div
              className={[
                styles.rightpanel__infoApp,
                styles.rightpanel__infoAppProjects
              ].join(" ")}
            >
              <HeadingTertiary color='fadedBlack'>4 Projects</HeadingTertiary>
            </div>
            <div
              className={[
                styles.rightpanel__infoApp,
                styles.rightpanel__infoAppTeams
              ].join(" ")}
            >
              <HeadingTertiary color='fadedBlack'>2 Teams</HeadingTertiary>
            </div>
          </div>
        </div> */}

        <div className={styles.rightpanel__infoSection}>
          <HeadingTertiary>Social Media</HeadingTertiary>
          <Link link='https://developerspath.com/'>
            https://developerspath.com/
          </Link>
        </div>

        <div className={styles.rightpanel__infoSection}>
          <HeadingTertiary>Contact</HeadingTertiary>
          <Paragraph>{props.user.email}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
