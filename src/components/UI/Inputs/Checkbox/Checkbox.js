import React from "react";
import styles from "./Checkbox.module.scss";
import { useState } from "react";

const CheckBox = (props) => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className={styles.cont}>
      <label className={styles.cont__checkbox}>
        <input
          onClick={() => {
            setIsClicked((prevState) => !prevState);
            props.handler(isClicked, props.id);
          }}
          className={styles.cont__checkboxInput}
          type="checkbox"
        />
        <span className={styles.cont__checkboxCustom}></span>
      </label>
      <p className={styles.cont__title}>{props.children}</p>
    </div>
  );
};

export default CheckBox;
