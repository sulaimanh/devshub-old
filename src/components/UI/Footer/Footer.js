import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <p className={styles.footer__para}>
          Developers path is commited in connecting developers to opportunities
          by facilitating the interaction with other developers and getting
          hands on experience.
        </p>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__right__left}>
          <p
            className={styles.footer__links}
            onClick={() => window.open("https://sulaimanhamouda.com", "_self")}
          >
            About Us
          </p>
          <p className={styles.footer__links}>Careers</p>
          <p className={styles.footer__links}>Email us</p>
        </div>
        <div className={styles.footer__right__right}>
          <p className={styles.footer__links}>Privacy Policy</p>
          <p className={styles.footer__links}>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
