import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import DesktopMenu from "../../components/UI/DesktopMenu/DesktopMenu";
import Header from "../../components/UI/Header/HeaderMain/HeaderMain";
import Footer from "../../components/UI/Footer/Footer";
import MobileMenu from "../../components/UI/MobileMenu/MobileMenu";

const Layout = (props) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const history = useHistory();
  const location = useLocation();

  // - If page is refreshed, then we need to keep the path
  useEffect(() => {
    const loc = location.pathname;
    console.log(loc);

    setSelectedTab(loc.substring(1));
    history.push("" + loc);
  }, []);

  const selectTabHandler = (event, choice) => {
    event.preventDefault();

    history.push("/" + choice);

    setSelectedTab(choice);
  };

  let desktopMenu = props.auth ? (
    <DesktopMenu handler={selectTabHandler} choice={selectedTab} />
  ) : null;
  let footer = props.auth ? <Footer /> : null;
  let menu = props.auth ? (
    <MobileMenu handler={selectTabHandler} choice={selectedTab} />
  ) : null;
  let header = selectedTab === "Home" && props.auth ? <Header /> : null;

  return (
    <div className={props.auth ? styles.layout : null}>
      {desktopMenu}
      <div style={{ position: "relative" }}>
        {header}
        {props.children}
        {menu}
        {footer}
      </div>
    </div>
  );
};

export default Layout;
