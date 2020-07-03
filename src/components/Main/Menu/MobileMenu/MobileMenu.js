import React from "react";
import styles from "./MobileMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "../menu";

const MobileMenu = (props) => {
  return (
    <div className={styles.menu}>
      {menuItems.map((tab, index) => {
        return (
          <div
            key={index}
            onClick={(event) => props.handler(event, tab.choice.toLowerCase())}
            className={[
              styles.menu__tab,
              props.choice === tab.path ? styles.menu__tab__selected : null
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
