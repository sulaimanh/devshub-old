import React, { useState } from "react";

import SearchInput from "../../Inputs/SearchInput/SearchInput";
import styles from "./HeaderMain.module.scss";

const HeaderMain = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__search}>
        <SearchInput
          isSubmitButton={true}
          placeholder='Search'
          info='Search for users, projects, or teams'
          value={search}
          handler={searchHandler}
        />
      </div>
      <h1 className={styles.header__title}>Developers Path</h1>
    </div>
  );
};

export default HeaderMain;
