import React from "react";
import styles from "./Card.module.scss";
import { headingSecondary as HeadingSecondary } from "../Text/Text";
import SmallLink from "../Links/Small/SmallLink";
import Technology from "../Technology/Technology";

const Card = (props) => {
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
        <p className={styles.card__descriptionDesc}>
          {props.section} Description
        </p>
        <p className={styles.card__descriptionText}>{props.description}</p>
      </div>
      <div className={styles.card__tech}>
        <Technology techUsed={props.techUsed} techNeeded={props.techNeeded} />
      </div>
    </div>
  );
};

export default Card;
