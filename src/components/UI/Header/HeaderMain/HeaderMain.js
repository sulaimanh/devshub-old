import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SearchInput from "../../Inputs/SearchInput/SearchInput";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "./HeaderMain.module.scss";

const HeaderMain = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__search}>
        {/* <SearchInput
          isSubmitButton={true}
          placeholder='Search'
          info='Search for users, projects, or teams'
          value={search}
          handler={searchHandler}
        /> */}
      </div>
      <h1 className={styles.header__title}>DevsHub</h1>
    </div>
  );
};

export default HeaderMain;
