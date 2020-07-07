import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = (props) => {
  let textarea = (
    <textarea
      id={props.for}
      placeholder="Enter Note"
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
        placeholder="Enter Description"
        className={[styles.textarea, styles.textareaView].join(" ")}
        value={props.field}
      />
    );
  }
  return (
    <div className={styles.group}>
      {textarea}

      <label className={styles.label} htmlFor={props.for}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default TextArea;
