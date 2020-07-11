import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styles from "./MobileMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "../menu";

const MobileMenu = (props) => {
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
    console.log(choice);

    history.push("/" + choice);

    setSelectedTab(choice);
  };

  return (
    <div className={styles.menu}>
      {menuItems.map((tab, index) => {
        return (
          <div
            key={index}
            onClick={(event) => selectTabHandler(event, tab.path)}
            className={[
              styles.menu__tab,
              selectedTab === tab.path ? styles.menu__tab__selected : null
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
