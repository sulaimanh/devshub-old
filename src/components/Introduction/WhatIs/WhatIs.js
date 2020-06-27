import React from "react";
import styles from "./WhatIs.module.scss";
import { headingSecondary as HeadingSecondary } from "../../UI/Text/Text";
import Group from "../../../assets/img/group.png";
import Code from "../../../assets/img/html.png";
import Cv from "../../../assets/img/cv.png";
import { useInView } from "react-intersection-observer";

const WhatIs = (props) => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  // console.log(inView, "sdasd");

  return (
    <div className={styles.what}>
      <div className={styles.what__container}>
        <div
          ref={ref1}
          className={[
            styles.what__reason,
            inView1 ? styles.transition1 : null
          ].join(" ")}
        >
          <img className={styles.what__reasonImg} src={Group} alt="group" />
          <div className={styles.what__reasonStatement}>
            <HeadingSecondary>A community of developers</HeadingSecondary>
            <p className={styles.what__reasonText}>
              Collaborate with other developers and working on a team helps you
              build effective collaboration skills, an important skill in the
              work force. It also presents the opportunity to learn from other
              developers.
            </p>
          </div>
        </div>
        <div
          ref={ref2}
          className={[
            styles.what__reason,
            inView2 ? styles.transition2 : null
          ].join(" ")}
        >
          <img className={styles.what__reasonImg} src={Code} alt="group" />
          <div className={styles.what__reasonStatement}>
            <HeadingSecondary>Open source made easier</HeadingSecondary>
            <p className={styles.what__reasonText}>
              Finally be able to contribute to open source projects. Open source
              can be really intemidating when you first consider contributing.
              It can be difficult and scary to navigate through a huge code
              base.
            </p>
          </div>
        </div>
        <div
          ref={ref3}
          className={[
            styles.what__reason,
            inView3 ? styles.transition1 : null
          ].join(" ")}
        >
          <img className={styles.what__reasonImg} src={Cv} alt="group" />
          <div className={styles.what__reasonStatement}>
            <HeadingSecondary>Build a portfolio.</HeadingSecondary>
            <p className={styles.what__reasonText}>
              The best way to impress employers is by being engaged and having
              done projects. This shows that you have the ability to take your
              learning beyond what you learn in school or online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
