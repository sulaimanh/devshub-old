import React from "react";
import styles from "./MobileMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faMailBulk,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const MobileMenu = (props) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__tab}>
        <p className={styles.menu__text}>
          <FontAwesomeIcon icon={faHome} size="1x" />
        </p>
        <p className={styles.menu__text}>Home</p>
      </div>
      <div className={styles.menu__tab}>
        <p className={styles.menu__text}>
          <FontAwesomeIcon icon={faAddressCard} size="1x" />
        </p>
        <p className={styles.menu__text}>Profile</p>
      </div>
      <div className={styles.menu__tab}>
        <p className={styles.menu__text}>
          <FontAwesomeIcon icon={faMailBulk} size="1x" />
        </p>
        <p className={styles.menu__text}>Messages</p>
      </div>
      <div className={[styles.menu__tab, styles.menu__tab__last].join(" ")}>
        <p className={styles.menu__text}>
          <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
        </p>
        <p className={styles.menu__text}>Sign Out</p>
      </div>
    </div>
  );
};

export default MobileMenu;
