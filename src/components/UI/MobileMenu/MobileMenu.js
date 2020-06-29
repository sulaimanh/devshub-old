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
  const tabs = [
    {
      choice: "Home",
      icon: faHome,
      isSelected: props.choice === "Home",
      isLast: false
    },
    {
      choice: "Profile",
      icon: faAddressCard,
      isSelected: props.choice === "Profile",
      isLast: false
    },
    {
      choice: "Messages",
      icon: faMailBulk,
      isSelected: props.choice === "Messages",
      isLast: false
    },
    {
      choice: "Sign Out",
      icon: faSignOutAlt,
      isSelected: props.choice === "Sign Out",
      isLast: true
    }
  ];

  return (
    <div className={styles.menu}>
      {tabs.map((tab, index) => {
        return (
          <div
            key={index}
            onClick={() => props.handler(tab.choice)}
            className={[
              styles.menu__tab,
              tab.isSelected ? styles.menu__tab__selected : null,
              tab.isLast ? styles.menu__tab__last : null
            ].join(" ")}
          >
            <p className={styles.menu__text}>
              <FontAwesomeIcon icon={tab.icon} size="1x" />
            </p>
            <p className={styles.menu__text}>{tab.choice}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MobileMenu;
