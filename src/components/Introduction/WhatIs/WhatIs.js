import {
  headingSecondary as HeadingSecondary,
  paragraph as Paragraph
} from "../../UI/Text/Text";

import React from "react";
import { ReactComponent as ReactCodeLogo } from "../../../assets/img/code.svg";
import { ReactComponent as ReactCommunityLogo } from "../../../assets/img/community.svg";
import { ReactComponent as ReactTeamLogo } from "../../../assets/img/team_work.svg";
import styles from "./WhatIs.module.scss";
import { useInView } from "react-intersection-observer";

const WhatIs = (props) => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className={styles.what}>
      <div
        ref={ref1}
        className={[
          styles.what__reason,
          inView1 ? styles.transition1 : null
        ].join(" ")}
      >
        <div className={styles.what__logos}>
          <ReactCommunityLogo className={styles.what__logos__logo} />
        </div>
        <div className={styles.what__reasonStatement}>
          <HeadingSecondary>A community of developers</HeadingSecondary>
          <Paragraph>
            Collaborating with other developers just got easier. Developers Path
            helps develoeprs build effective technical and collaboration skills.
          </Paragraph>
        </div>
      </div>
      <div
        ref={ref2}
        className={[
          styles.what__reason,
          inView2 ? styles.transition2 : null
        ].join(" ")}
      >
        <div className={styles.what__reasonStatement}>
          <HeadingSecondary>Join Teams and Projects</HeadingSecondary>
          <Paragraph>
            Have an idea? Post it on Developers Path and build your own team.
            Looking for a team or project to join? Join Developers Path and find
            your next project,
          </Paragraph>
        </div>
        <div className={styles.what__logos}>
          <ReactTeamLogo className={styles.what__logos__logo} />
        </div>
      </div>
      <div
        ref={ref3}
        className={[
          styles.what__reason,
          inView3 ? styles.transition1 : null
        ].join(" ")}
      >
        <div className={styles.what__logos}>
          <ReactCodeLogo className={styles.what__logos__logo} />
        </div>
        <div className={styles.what__reasonStatement}>
          <HeadingSecondary>Build an impressive portfolio</HeadingSecondary>
          <Paragraph>
            The best way to impress employers is by being engaged and having
            done projects. This shows that you have the ability to take your
            learning beyond what you learn in school or online.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
