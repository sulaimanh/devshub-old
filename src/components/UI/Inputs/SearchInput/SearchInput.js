import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MoreInfo from "../../MoreInfo/MoreInfo";

const SearchInput = (props) => {
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

        <div className={styles.input__iconInfo}>
          <MoreInfo>{props.info}</MoreInfo>
        </div>
      </div>
      {props.isSubmitButton ? (
        <button
          onClick={props.submitHandler}
          className={styles.input__search__button}
        >
          Submit
        </button>
      ) : null}
    </div>
  );
};

export default SearchInput;
