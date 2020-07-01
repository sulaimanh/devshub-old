import React, { useState } from "react";
import styles from "./DesktopMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faMailBulk,
  faSignOutAlt,
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";

const DesktopMenu = (props) => {
  const [arrow, setArrow] = useState(faArrowCircleLeft);

  const hideShowHandler = () => {
    if (arrow === faArrowCircleLeft) {
      setArrow(faArrowCircleRight);
    } else {
      setArrow(faArrowCircleLeft);
    }
  };

  const tabs = [
    {
      choice: "Home",
      icon: faHome,
      isSelected: props.choice === "Home"
    },
    {
      choice: "Profile",
      icon: faAddressCard,
      isSelected: props.choice === "Profile"
    },
    {
      choice: "Messages",
      icon: faMailBulk,
      isSelected: props.choice === "Messages"
    },
    {
      choice: "Sign Out",
      icon: faSignOutAlt,
      isSelected: props.choice === "Sign Out"
    }
  ];
  return (
    <div
      className={[
        styles.menu,
        arrow === faArrowCircleLeft ? styles.menu__show : styles.menu__hide
      ].join(" ")}
    >
      <div
        onClick={hideShowHandler}
        className={[
          styles.menu__hideShow,
          arrow === faArrowCircleLeft
            ? styles.menu__show__arrow
            : styles.menu__hide__arrow
        ].join(" ")}
      >
        <FontAwesomeIcon
          icon={arrow}
          size="2x"
          className={styles.menu__hideShow__logo}
        />
      </div>
      <div className={styles.menu__links}>
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              onClick={() => props.handler(tab.choice)}
              className={[
                styles.menu__link,
                tab.isSelected ? styles.menu__link__selected : null,
                arrow === faArrowCircleLeft
                  ? styles.menu__show__links
                  : styles.menu__hide__links
              ].join(" ")}
            >
              <FontAwesomeIcon
                className={[
                  styles.menu__linkColor,
                  tab.isSelected ? styles.menu__linkSelected : null
                ].join(" ")}
                icon={tab.icon}
                size="2x"
              />
              <p
                className={[
                  styles.menu__text,
                  tab.isSelected ? styles.menu__textSelected : null
                ].join(" ")}
              >
                {tab.choice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMenu;
