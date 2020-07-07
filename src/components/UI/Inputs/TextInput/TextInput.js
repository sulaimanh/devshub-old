import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  let input = props.isTextArea ? (
    <textarea
      id={props.for}
      placeholder={props.placeholder}
      className={styles.form__textarea}
      type={props.type}
      onChange={props.handler}
      value={props.value}
      required
    />
  ) : (
    <input
      id={props.for}
      placeholder={props.placeholder}
      className={styles.form__input}
      type={props.type}
      value={props.value}
      onChange={props.handler}
      required
    />
  );

  return (
    <div className={styles.form}>
      {input}
      <label className={styles.form__label} htmlFor={props.for}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default TextInput;
