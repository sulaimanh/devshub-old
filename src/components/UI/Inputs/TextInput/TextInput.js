import PropTypes from "prop-types";
import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = (
  {
    id,
    type,
    value,
    placeholder,
    handler,
    backgroundColor,
    isRequired,
    isTextArea,
    isReadOnly,
    ...props
  },
  ref
) => {
  return (
    <div className={styles.form}>
      {isTextArea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={[styles[`textarea`], styles[`${backgroundColor}`]].join(
            " "
          )}
          type={type}
          onChange={handler}
          value={value}
          required={isRequired}
          readOnly={isReadOnly}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handler}
          required={isRequired}
          className={[styles[`input`], styles[`${backgroundColor}`]].join(" ")}
        />
      )}
      <label className={styles[`label`]} htmlFor={props.id}>
        {placeholder}
      </label>
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

TextInput.defaultProps = {
  isRequired: false,
  isTextArea: false,
  backgroundColor: "white"
};

export default TextInput;
