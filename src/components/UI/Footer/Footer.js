import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <p className={styles.footer__para}>
          Developers path is commited in connecting developers with one another
          for the purpose of them advancing in the field of Computer Science
        </p>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__right__left}>
          <p className={styles.footer__links}>Our Story</p>
          <p className={styles.footer__links}>Careers</p>
          <p className={styles.footer__links}>Email us</p>
        </div>
        <div className={styles.footer__right__right}>
          <p className={styles.footer__links}>Privacy Policy</p>
          <p className={styles.footer__links}>Support</p>
        </div>
      </div>
      <div className={styles.halfCircle1}></div>
      <div className={styles.halfCircle2}></div>
    </div>
  );
};

export default Footer;
