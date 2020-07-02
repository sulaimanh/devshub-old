import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Layout.module.scss";
import DesktopMenu from "../../components/UI/DesktopMenu/DesktopMenu";
import Header from "../../components/UI/Header/HeaderMain/HeaderMain";
import Footer from "../../components/UI/Footer/Footer";
import MobileMenu from "../../components/UI/MobileMenu/MobileMenu";

const Layout = (props) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const history = useHistory();

  const selectTabHandler = (event, choice) => {
    event.preventDefault();
    if (choice === "Home") {
      history.push("/");
    } else {
      history.push("/" + choice);
    }
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
      <div style={{ position: "relative" }}>
        {selectedTab === "Profile" ? null : <Header />}
        {props.children}
        {menu}
        {footer}
      </div>
    </div>
  );
};

export default Layout;
