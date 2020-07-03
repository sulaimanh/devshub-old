import React, { useState } from "react";
import styles from "./HeaderMain.module.scss";
import SearchInput from "../../Inputs/SearchInput/SearchInput";
import { headingSecondary as HeadingSecondary } from "../../Text/Text";

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
        />
      </div>
      <h1 className={styles.header__title}>Developers Path</h1>
    </div>
  );
};

export default HeaderMain;
