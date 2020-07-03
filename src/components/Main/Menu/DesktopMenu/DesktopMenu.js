import React, { useState } from "react";
import styles from "./DesktopMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import menuItems from "../menu";

const DesktopMenu = (props) => {
  const [arrow, setArrow] = useState(faArrowCircleLeft);

  const hideShowHandler = () => {
    if (arrow === faArrowCircleLeft) {
      setArrow(faArrowCircleRight);
    } else {
      setArrow(faArrowCircleLeft);
    }
  };

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
        {menuItems.map((item, index) => {
          return (
            <div
              key={index}
              onClick={(event) =>
                props.handler(event, item.choice.toLowerCase())
              }
              className={[
                styles.menu__link,
                props.choice === item.path ? styles.menu__link__selected : null,
                arrow === faArrowCircleLeft
                  ? styles.menu__show__links
                  : styles.menu__hide__links
              ].join(" ")}
            >
              <FontAwesomeIcon
                className={[
                  styles.menu__linkColor,
                  props.choice === item.path ? styles.menu__linkSelected : null
                ].join(" ")}
                icon={item.icon}
                size="2x"
              />
              <p
                className={[
                  styles.menu__text,
                  props.choice === item.path ? styles.menu__textSelected : null
                ].join(" ")}
              >
                {item.choice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMenu;
