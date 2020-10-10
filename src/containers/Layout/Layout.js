import React, { Fragment, useState } from "react";

import DesktopMenu from "../../components/Main/Menu/DesktopMenu/DesktopMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/HeaderMain/HeaderMain";
import MobileMenu from "../../components/Main/Menu/MobileMenu/MobileMenu";
import { paragraph as Paragraph } from "../../components/UI/Text/Text";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  const [show, setShow] = useState(true);
  let desktopMenu = props.auth ? <DesktopMenu /> : null;
  let header = props.auth ? <Header /> : null;
  let menu = props.auth ? <MobileMenu /> : null;

  return (
    <Fragment>
      {show ? (
        <div className={styles.top}>
          <Paragraph className='small'>
            DevsHub is still in development mode. Please go to{" "}
            <span
              className={styles.link}
              onClick={() =>
                window.open("https://github.com/sulaimanh/devshub", "_self")
              }
            >
              DevsHub
            </span>{" "}
            to check on or contribute to the project.{" "}
            <FontAwesomeIcon
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={styles.close}
              icon={faTimesCircle}
              size='lg'
            />
          </Paragraph>
        </div>
      ) : null}
      <div className={props.auth ? styles.layout : null}>
        {desktopMenu}
        <div
          style={{
            position: "relative",
            width: "100%"
          }}
        >
          {header}
          {props.children}
          {menu}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
