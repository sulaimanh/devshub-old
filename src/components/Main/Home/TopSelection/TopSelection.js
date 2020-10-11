import Add from "../Add/Add";
import Button from "../../../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./TopSelection.module.scss";

const TopSelection = ({
  selectedChoice,
  section,
  showAdd,
  selectedChoiceHandler,
  showAddHandler,
  selections
}) => {
  const view = selections.map((selection, index) => {
    return (
      <Link
        key={index}
        onClick={() =>
          selectedChoiceHandler(selection.choice, selection.buttonName)
        }
        className={[
          styles.topLink,
          selectedChoice === selection.choice ? styles[selection.choice] : null,
          selectedChoice === selection.choice ? styles.topLink__selected : null
        ].join(" ")}
        to={selection.path}
      >
        <p className={styles.topText}>{selection.heading}</p>
      </Link>
    );
  });

  let addView = {};

  return (
    <React.Fragment>
      {showAdd ? (
        <Add
          post={null}
          handler={showAddHandler}
          section={section}
          postId={null}
        />
      ) : null}

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles[`top--links`]}>{view}</div>
        </div>

        <div className={styles.hr}>
          <hr className={[styles[section], styles.hr1].join(" ")} />
          <hr className={styles.hr2} />
        </div>
      </div>
      <div className={styles[`top--add`]}>
        <Button
          handler={showAddHandler}
          category='tertiary'
          type='button'
          size='large'
          label={`Post a ${section}`}
        />
      </div>
    </React.Fragment>
  );
};

export default TopSelection;
