import React from "react";
import styles from "./Banner.module.scss";
import { headingSecondary as HeadingSecondary } from "../../UI/Text/Text";

const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#005aea"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,160C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className={styles.text}>
          <HeadingSecondary>
            <span className={styles.banner__header}>
              What will you build next?
            </span>
          </HeadingSecondary>
        </div>
        <svg
          className={styles.svgRotate}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#005aea"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,160C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
