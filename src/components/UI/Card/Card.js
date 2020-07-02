import React from "react";
import styles from "./Card.module.scss";
import { headingSecondary as HeadingSecondary } from "../Text/Text";
import SmallLink from "../Links/Small/SmallLink";

const Card = (props) => {
  const skills = [
    "Java",
    "React",
    "JavaScript",
    "Node",
    "AWS",
    "Python",
    "MongoDB"
  ];

  const skillView = skills.map((skill, index) => {
    return (
      <div key={index} className={styles.card__skills__cardsCard}>
        <p className={styles.card__skillsText}>{skill}</p>
      </div>
    );
  });

  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <HeadingSecondary>Developers Path</HeadingSecondary>

        <SmallLink handler={props.goToCardHandler} className="tertiary">
          Explore
        </SmallLink>
      </div>
      <div className={styles.card__description}>
        <p className={styles.card__descriptionDesc}>Team Description</p>
        <p className={styles.card__descriptionText}>
          This is a card and this is a card and This is a card and this is a
          card and This is a card and this is a card andThis is a card and this
          is a card andThis
        </p>
      </div>
      <div className={styles.card__skills}>
        <div className={styles.card__skills__container}>
          <p className={styles.card__skillsSkills}>Skills Needed</p>
          <div className={styles.card__skills__cards}>{skillView}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
