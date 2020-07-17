import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary
} from "../../../components/UI/Text/Text";

import React from "react";
import RightPanel from "./RightPanel/RightPanel";
import styles from "./Profile.module.scss";

{
  /* <FontAwesomeIcon icon={faEdit} /> */
}

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__maincontainer}>
        <div className={styles.profile__header}>
          <HeadingSecondary>Profile Video</HeadingSecondary>
        </div>
      </div>

      <RightPanel />
    </div>
  );
};

export default Profile;
