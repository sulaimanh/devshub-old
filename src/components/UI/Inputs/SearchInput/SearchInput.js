import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = (props) => {
  const [difficulty, setDifficulty] = useState({
    showDropDown: false,
    difficulty: ""
  });

  const difficultyHandler = (choice) => {
    console.log(choice);
    setDifficulty(choice);
  };

  return (
    <div className={styles.input}>
      <input placeholder="Search" className={styles.input__search} />
      <div className={styles.input__dropdown}>
        <h2 className={styles.input__dropdown__text}>
          Select to sort by Difficulty
        </h2>
        <p
          className={[
            styles.input__dropdown__difficulty,
            styles.input__dropdown__easy
          ].join(" ")}
          onClick={() => difficultyHandler("easy")}
        >
          Easy
        </p>
        <p
          className={[
            styles.input__dropdown__difficulty,
            styles.input__dropdown__medium
          ].join(" ")}
          onClick={() => difficultyHandler("medium")}
        >
          Medium
        </p>
        <p
          className={[
            styles.input__dropdown__difficulty,
            styles.input__dropdown__difficult
          ].join(" ")}
          onClick={() => difficultyHandler("hard")}
        >
          Hard
        </p>
      </div>
      <FontAwesomeIcon
        icon={faSearch}
        size="lg"
        className={styles.input__icon}
      />
      <button onClick={props.handler} className={styles.input__search__button}>
        Submit
      </button>
    </div>
  );
};

export default SearchInput;
