import React, { useState, useEffect } from "react";
import styles from "./WhyDev.module.scss";
import { headingPrimary as HeadingPrimary } from "../../UI/Text/Text";
import { useInView } from "react-intersection-observer";
import MediumLink from "../../UI/Links/Medium/MediumLink";

const WhyDev = (props) => {
  const [term, setTerm] = useState({
    term: "developers",
    index: 0
  });

  const terms = ["developers", "ideas", "opportunities"];

  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => {
        if (term.index === 0) {
          setTerm({ term: terms[1], index: 1 });
        } else if (term.index === 1) {
          setTerm({ term: terms[2], index: 2 });
        } else {
          setTerm({ term: terms[0], index: 0 });
        }
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={styles.why}>
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
      <div
        className={
          inView
            ? [styles.transition, styles.why__container].join(" ")
            : styles.why__container
        }
        ref={ref}
      >
        <div className={styles.why__heading}>
          <HeadingPrimary>
            <span className={styles.why__headingText}>A community of </span>
            <span
              className={[
                styles.why__headingChange,
                inView ? styles.why__headingChange__fadeIn : null
              ].join(" ")}
            >
              {term.term}
            </span>
          </HeadingPrimary>
        </div>
        <div className={styles.why__statement}>
          <p className={styles.why__statementText}>
            Developers path makes is easy for developers to start working on
            real projects. Developers are able to collaborate on projects
            together, work on open source, and gain effective team building
            skills.
          </p>
        </div>
      </div>
      <div className={styles.why__button}>
        <MediumLink
          action="sign up"
          handler={props.handleSignIn}
          className="tertiaryOutline"
        >
          Sign Up
        </MediumLink>
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
  );
};

export default WhyDev;
