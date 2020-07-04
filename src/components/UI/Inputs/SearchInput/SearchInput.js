import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const SearchInput = (props) => {
  const infoHandler = () => {};

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
          size="2x"
          className={styles.input__iconSearch}
        />
        <FontAwesomeIcon
          icon={faInfoCircle}
          size="2x"
          className={styles.input__iconInfo}
          onClick={infoHandler}
        />
        <div className={styles.input__info}>
          <p className={styles.input__infoText}>{props.info}</p>
        </div>
      </div>
      {props.isSubmitButton ? (
        <button
          onClick={props.handler}
          className={styles.input__search__button}
        >
          Submit
        </button>
      ) : null}
    </div>
  );
};

export default SearchInput;
