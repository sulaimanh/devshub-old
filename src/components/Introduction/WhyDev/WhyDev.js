import {
  headingPrimary as HeadingPrimary,
  paragraph as Paragraph
} from "../../UI/Text/Text";
import React, { useEffect, useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./WhyDev.module.scss";
import { useInView } from "react-intersection-observer";

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
          <Paragraph className='white'>
            DevsHub makes it easy for developers to start working on real
            projects. Developers are able to collaborate on projects together,
            work on teams, and gain effective skills.
          </Paragraph>
        </div>
      </div>
      <div className={styles.why__button}>
        <Button
          handler={() => props.handleSignIn("sign up")}
          category='tertiary--outline'
          type='button'
          size='large'
          label='Sign Up'
        />
      </div>
    </div>
  );
};

export default WhyDev;
