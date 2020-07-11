import React, { useEffect, useState } from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, useRouteMatch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "../menu";
import styles from "./DesktopMenu.module.scss";

const DesktopMenu = (props) => {
  const [arrow, setArrow] = useState(faArrowCircleLeft);

  const [selectedTab, setSelectedTab] = useState("home");
  const history = useHistory();
  const match = useRouteMatch("/:section");

  // - If page is refreshed, then we need to keep the path
  useEffect(() => {
    if (match) {
      setSelectedTab(match.params.section);
    }
  }, [match]);

  const selectTabHandler = (event, choice) => {
    event.preventDefault();

    history.push("/" + choice);

    setSelectedTab(choice);
  };

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
              onClick={(event) => selectTabHandler(event, item.path)}
              className={[
                styles.menu__link,
                selectedTab === item.path ? styles.menu__link__selected : null,
                arrow === faArrowCircleLeft
                  ? styles.menu__show__links
                  : styles.menu__hide__links
              ].join(" ")}
            >
              <FontAwesomeIcon
                className={[
                  styles.menu__linkColor,
                  selectedTab === item.path ? styles.menu__linkSelected : null
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
