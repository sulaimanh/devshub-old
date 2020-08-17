import React, { useState } from "react";

import Button from "../Button/Button";
import { headingSecondary as HeadingSecondary } from "../Text/Text";
import { headingTertiary as HeadingTertiary } from "../Text/Text";
import PropTypes from "prop-types";
import Technology from "../Technology/Technology";
import styles from "./Card.module.scss";
import { useEffect } from "react";

const Card = ({ description, handler, id, title, tech, ...props }) => {
  const [isWordy, setWordy] = useState(false);
  // 250

  useEffect(() => {
    if (description.length > 250) {
      setWordy(true);
    } else {
      setWordy(false);
    }
  }, [description]);

  const desc = isWordy ? (
    <p className={styles.card__descriptionText}>
      {description.substring(0, 250)}...{" "}
      <span
        onClick={(event) => handler(event, id)}
        className={styles.card__descriptionSeemore}
      >
        see more
      </span>
    </p>
  ) : (
    <p className={styles.card__descriptionText}>{description}</p>
  );

  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <div
          className={styles.card__headingTitle}
          onClick={(event) => handler(event, id)}
        >
          <HeadingSecondary>{title}</HeadingSecondary>
        </div>

        <Button
          handler={(event) => handler(event, id)}
          category='tertiary--outline'
          size='small'
          label='Explore'
          type='button'
        />
      </div>
      <div className={styles.card__description}>
        <HeadingTertiary>Description</HeadingTertiary>
        {desc}
      </div>
      <div className={styles.card__tech}>
        <Technology tech={tech} />
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

Card.defaultProps = {
  handler: null
};

export default Card;
