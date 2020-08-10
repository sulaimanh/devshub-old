import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary,
  paragraph as Paragraph
} from "../../../../components/UI/Text/Text";

import React from "react";
import { ReactComponent as ReactUsersLogo } from "../../../../assets/img/users.svg";
import styles from "./Message.module.scss";
import { useHistory } from "react-router-dom";

const Message = (props) => {
  const history = useHistory();

  if (props.post === null) {
    return (
      <div className={styles.select}>
        <div className={styles.select__firstMessage}>
          <HeadingTertiary>
            Select a post to see which users are interested in working with you.
          </HeadingTertiary>
        </div>
        <ReactUsersLogo className={styles.select__firstLogo} />
      </div>
    );
  }

  const goToUserHandler = (userId) => {
    history.push("/profile/" + userId);
  };

  return (
    <div className={styles.message}>
      {props.post.users.length === 0 ? (
        <h1>Looks like there are no users</h1>
      ) : (
        <h1>Users interested in joining {props.post.title}</h1>
      )}
      {props.post.users.map((user, index) => {
        return (
          <div key={index} className={styles.message__card}>
            <div
              className={styles.message__cardClick}
              onClick={() => goToUserHandler(user.ownerId)}
            >
              <Paragraph className='medium'>{user.name}</Paragraph>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
