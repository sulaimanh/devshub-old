import React from "react";
import styles from "./HeaderMain.module.scss";
import SearchInput from "../../Inputs/SearchInput/SearchInput";
import { headingSecondary as HeadingSecondary } from "../../Text/Text";

const HeaderMain = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__search}>
        <SearchInput />
      </div>
      <h1 className={styles.header__title}>Developers Path</h1>
    </div>
  );
};

export default HeaderMain;
