import { faBars, faEdit } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingSecondary as HeadingSecondary } from "../../../components/UI/Text/Text";
import React from "react";
import styles from "./Profile.module.scss";

{
  /* <FontAwesomeIcon icon={faEdit} /> */
}

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__maincontainer}>
        <div className={styles.profile__header}>
          <HeadingSecondary>Profile</HeadingSecondary>
        </div>
      </div>

      <div className={styles.profile__rightpanel}>
        <div className={styles.profile__rightpanel__top}>
          <img
            className={styles.profile__rightpanel__topPic}
            src='https://media-exp1.licdn.com/dms/image/C4E03AQEfnBKVMWWjNw/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=3q2t78jeF3ltIU-DG29QF_N-yyXwj9C4raOviCLC9UY'
          />

          <HeadingSecondary>Sulaiman Hamouda</HeadingSecondary>
        </div>

        <div className={styles.profile__rightpanel__topHamburger}>
          <FontAwesomeIcon icon={faBars} size='3x' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
