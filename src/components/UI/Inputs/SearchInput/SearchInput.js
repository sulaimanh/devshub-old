import React from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = (props) => {
  return (
    <div className={styles.input}>
      <input placeholder="Search" className={styles.input__search} />
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
