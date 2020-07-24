import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = (props, ref) => {
  let input = props.isRequired ? (
    <input
      id={props.for}
      placeholder={props.placeholder}
      className={[
        styles.form__input,
        styles[`form__input__${props.backgroundColor}`]
      ].join(" ")}
      type={props.type}
      value={props.value}
      onChange={props.handler}
      required
    />
  ) : (
    <input
      id={props.for}
      placeholder={props.placeholder}
      className={[
        styles.form__input,
        styles[`form__input__${props.backgroundColor}`]
      ].join(" ")}
      type={props.type}
      value={props.value}
      onChange={props.handler}
    />
  );

  if (props.isTextArea) {
    input = (
      <textarea
        id={props.for}
        placeholder={props.placeholder}
        className={[
          styles.form__textarea,
          styles[`form__textarea__${props.backgroundColor}`]
        ].join(" ")}
        type={props.type}
        onChange={props.handler}
        value={props.value}
        required
      />
    );
  }

  if (props.isUrl) {
    input = (
      <input
        id={props.for}
        placeholder={props.placeholder}
        className={[
          styles.form__input,
          styles[`form__input__${props.backgroundColor}`]
        ].join(" ")}
        type={props.type}
        value={props.value}
        onChange={props.handler}
      />
    );
  }

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
