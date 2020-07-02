import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";

const SearchInput = (props) => {
  const [difficulty, setDifficulty] = useState({
    toggleDropDown: false,
    difficulty: ""
  });

  const toggleDropDown = () => {
    setDifficulty({
      ...difficulty,
      toggleDropDown: !difficulty.toggleDropDown
    });
  };

  const difficultyHandler = (choice) => {
    if (choice === difficulty.difficulty) {
      setDifficulty({ ...difficulty, difficulty: "" });
    } else {
      setDifficulty({ ...difficulty, difficulty: choice });
    }
  };

  return (
    <div className={styles.input}>
      <div className={styles.input__input}>
        <input placeholder="Search" className={styles.input__search} />
        <a onClick={toggleDropDown} className={styles.input__caret}>
          <FontAwesomeIcon
            icon={difficulty.toggleDropDown ? faCaretUp : faCaretDown}
            size="2x"
          />
        </a>

        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className={styles.input__icon}
        />
        <button
          onClick={props.handler}
          className={styles.input__search__button}
        >
          Submit
        </button>
      </div>

      <div
        className={[
          styles.input__dropdown,
          difficulty.toggleDropDown ? null : styles.input__hideDropdown
        ].join(" ")}
      >
        <h2 className={styles.input__dropdown__text}>
          Select to sort by Difficulty
        </h2>
        <p
          className={[
            styles.input__dropdown__difficulty,
            styles.input__dropdown__easy,
            difficulty.difficulty === "easy"
              ? styles.input__dropdown__easy__chosen
              : null
          ].join(" ")}
          onClick={() => difficultyHandler("easy")}
        >
          Easy
        </p>
        <p
          className={[
            styles.input__dropdown__difficulty,
            styles.input__dropdown__medium,
            difficulty.difficulty === "medium"
              ? styles.input__dropdown__medium__chosen
              : null
          ].join(" ")}
          onClick={() => difficultyHandler("medium")}
        >
          Medium
        </p>
        <p
          className={[
            styles.input__dropdown__difficulty,
            styles.input__dropdown__hard,
            difficulty.difficulty === "hard"
              ? styles.input__dropdown__hard__chosen
              : null
          ].join(" ")}
          onClick={() => difficultyHandler("hard")}
        >
          Hard
        </p>
      </div>
    </div>
  );
};

export default SearchInput;
