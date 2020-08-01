import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary
} from "../../../../components/UI/Text/Text";

import React from "react";
import { ReactComponent as ReactUsersLogo } from "../../../../assets/img/users.svg";
import styles from "./Message.module.scss";

const Message = (props) => {
  if (props.post === null) {
    return (
      <div className={styles.message}>
        <div className={styles.message__firstMessage}>
          <HeadingTertiary>
            Select a post to see which users are interested in working on it.
          </HeadingTertiary>
        </div>
        <ReactUsersLogo className={styles.message__firstLogo} />
      </div>
    );
  }
  return <div className={styles.message}></div>;
};

export default Message;
