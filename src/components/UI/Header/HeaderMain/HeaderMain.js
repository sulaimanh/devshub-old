import React, { useState } from "react";
import styles from "./HeaderMain.module.scss";
import SearchInput from "../../Inputs/SearchInput/SearchInput";

const HeaderMain = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    console.log(search);

    setSearch(event.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__search}>
        <SearchInput
          isSubmitButton={true}
          value={search}
          placeholder="Search"
          handler={searchHandler}
          info="Search for users, projects, or teams"
        />
      </div>
      <h1 className={styles.header__title}>Developers Path</h1>
    </div>
  );
};

export default HeaderMain;
