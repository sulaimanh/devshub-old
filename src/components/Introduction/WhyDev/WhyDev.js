import React, { useState, useEffect } from "react";
import styles from "./WhyDev.module.scss";
import { headingPrimary as HeadingPrimary } from "../../UI/Text/Text";

const WhyDev = (props) => {
  const [term, setTerm] = useState({ term: "developers", index: 0 });
  const terms = ["developers", "ideas", "opportunities"];

  useEffect(() => {
    console.log("Hello");
    const interval = setInterval(() => {
      console.log("Hello");
      console.log(term.term);
      console.log(term.index);

      if (term.index === 0) {
        setTerm({ term: terms[1], index: 1 });
      } else if (term.index === 1) {
        setTerm({ term: terms[2], index: 2 });
      } else {
        setTerm({ term: terms[0], index: 0 });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={styles.why}>
      <div className={styles.why__heading}>
        <HeadingPrimary>
          <span className={styles.why__headingText}>A community of </span>
          <span className={styles.why__headingChange}>{term.term}</span>
        </HeadingPrimary>
      </div>
      <div className={styles.why__statement}>
        <p className={styles.why__statementText}>
          Developers path makes is easy for developers to start working on real
          projects. Developers are able to collaborate on projects together,
          work on open source, and gain effective team building skills.
        </p>
      </div>
    </div>
  );
};

export default WhyDev;
