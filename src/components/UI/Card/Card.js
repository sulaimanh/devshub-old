import React, { useState } from "react";

import { headingSecondary as HeadingSecondary } from "../Text/Text";
import { headingTertiary as HeadingTertiary } from "../Text/Text";
import SmallLink from "../Links/Small/SmallLink";
import Technology from "../Technology/Technology";
import styles from "./Card.module.scss";
import { useEffect } from "react";

const Card = (props) => {
  const [isWordy, setWordy] = useState(false);
  // 250

  useEffect(() => {
    if (props.description.length > 250) {
      setWordy(true);
    } else {
      setWordy(false);
    }
  }, [props.description]);

  const description = isWordy ? (
    <p className={styles.card__descriptionText}>
      {props.description.substring(0, 250)}...{" "}
      <span
        onClick={(event) => props.handler(event, props.id)}
        className={styles.card__descriptionSeemore}
      >
        see more
      </span>
    </p>
  ) : (
    <p className={styles.card__descriptionText}>{props.description}</p>
  );

  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <div
          className={styles.card__headingTitle}
          onClick={(event) => props.handler(event, props.id)}
        >
          <HeadingSecondary>{props.title}</HeadingSecondary>
        </div>

        <SmallLink
          id={props.id}
          handler={props.handler}
          className='tertiaryOutline'
        >
          Explore
        </SmallLink>
      </div>
      <div className={styles.card__description}>
        <HeadingTertiary>Description</HeadingTertiary>
        {description}
      </div>
      <div className={styles.card__tech}>
        <Technology tech={props.tech} />
      </div>
    </div>
  );
};

export default Card;
