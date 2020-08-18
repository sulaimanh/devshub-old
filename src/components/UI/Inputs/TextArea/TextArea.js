import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({
  id,
  type,
  value,
  placeholder,
  handler,
  backgroundColor,
  isRequired,
  ...props
}) => {
  let textarea = (
    <textarea
      id={props.for}
      placeholder='Enter Note'
      className={styles.textarea}
      onChange={props.changed}
      value={props.value}
    />
  );
  if (props.readOnly === true) {
    textarea = (
      <textarea
        readOnly
        id={props.for}
        placeholder='Enter Description'
        className={[styles.textarea, styles.textareaView].join(" ")}
        value={props.field}
      />
    );
  }

  return (
    <React.Fragment>
      <textarea
        id={id}
        placeholder={placeholder}
        className={[
          styles[`textarea`],
          styles[`textarea__${backgroundColor}`]
        ].join(" ")}
        type={type}
        onChange={handler}
        value={value}
        required
      />

      <label className={styles.label} htmlFor={id}>
        {placeholder}
      </label>
    </React.Fragment>
  );
};

export default TextArea;
