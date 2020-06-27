import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <div className={styles.form}>
      <input
        id={props.for}
        placeholder={props.placeholder}
        className={styles.form__input}
        type={props.type}
        value={props.value}
        onChange={props.handler}
        required
      />
      <label className={styles.form__label} htmlFor={props.for}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default TextInput;
