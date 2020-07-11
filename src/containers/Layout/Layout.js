import React from "react";
import styles from "./Layout.module.scss";
import DesktopMenu from "../../components/Main/Menu/DesktopMenu/DesktopMenu";
import Header from "../../components/UI/Header/HeaderMain/HeaderMain";
import Footer from "../../components/UI/Footer/Footer";
import MobileMenu from "../../components/Main/Menu/MobileMenu/MobileMenu";

const Layout = (props) => {
  let desktopMenu = props.auth ? <DesktopMenu /> : null;
  let header = props.auth ? <Header /> : null;
  let menu = props.auth ? <MobileMenu /> : null;

  return (
    <div className={props.auth ? styles.layout : null}>
      {desktopMenu}
      <div style={{ position: "relative" }}>
        {header}
        {props.children}
        {menu}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
