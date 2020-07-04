import React from "react";
import styles from "./Card.module.scss";
import { headingSecondary as HeadingSecondary } from "../Text/Text";
import SmallLink from "../Links/Small/SmallLink";

const Card = (props) => {
  const techUsed = props.techUsed.map((skill, index) => {
    return (
      <div key={index} className={styles.card__skills__cardsCard}>
        <p className={styles.card__skillsText}>{skill}</p>
      </div>
    );
  });

  const techNeeded = props.techNeeded.map((skill, index) => {
    return (
      <div key={index} className={styles.card__skills__cardsCard}>
        <p className={styles.card__skillsText}>{skill}</p>
      </div>
    );
  });

  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <HeadingSecondary>{props.title}</HeadingSecondary>

        <SmallLink
          id={props.id}
          handler={props.handler}
          className="tertiaryOutline"
        >
          Explore
        </SmallLink>
      </div>
      <div className={styles.card__description}>
        <p className={styles.card__descriptionDesc}>Team Description</p>
        <p className={styles.card__descriptionText}>{props.description}</p>
      </div>
      <div className={styles.card__skills}>
        <div className={styles.card__skillsContainer}>
          <p className={styles.card__skillsSkills}>Technologies Used</p>
          <div className={styles.card__skills__cards}>{techUsed}</div>
        </div>
        <div className={styles.card__skillsContainer}>
          <p className={styles.card__skillsSkills}>Looking For</p>
          <div className={styles.card__skills__cards}>{techNeeded}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
