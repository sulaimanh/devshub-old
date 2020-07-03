import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <input
          placeholder={props.placeholder}
          className={styles.input__search}
          value={props.value}
          onChange={props.handler}
        />
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className={styles.input__icon}
        />
        {props.isSubmitButton ? (
          <button
            onClick={props.handler}
            className={styles.input__search__button}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchInput;
