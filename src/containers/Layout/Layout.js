import React, { useState } from "react";
import styles from "./Layout.module.scss";
import DesktopMenu from "../../components/UI/DesktopMenu/DesktopMenu";
import Footer from "../../components/UI/Footer/Footer";
import MobileMenu from "../../components/UI/MobileMenu/MobileMenu";

const Layout = (props) => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const selectTabHandler = (choice) => {
    setSelectedTab(choice);
  };

  let desktopMenu = props.auth ? (
    <DesktopMenu handler={selectTabHandler} choice={selectedTab} />
  ) : null;
  let footer = props.auth ? <Footer /> : null;

  let menu = props.auth ? (
    <MobileMenu handler={selectTabHandler} choice={selectedTab} />
  ) : null;
  return (
    <div className={props.auth ? styles.layout : null}>
      {desktopMenu}
      <div>
        {props.children}
        {menu}
        {footer}
      </div>
    </div>
  );
};

export default Layout;
