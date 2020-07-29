import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingSecondary as HeadingSecondary } from "../../Text/Text";
import SearchInput from "../../Inputs/SearchInput/SearchInput";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
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
        <HeadingSecondary>
          ( ) <FontAwesomeIcon icon={faBicycle} /> {">"}
        </HeadingSecondary>
      </div>
      <h1 className={styles.header__title}>Developers Path</h1>
    </div>
  );
};

export default HeaderMain;
