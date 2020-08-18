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
    ...props
  },
  ref
) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

TextInput.defaultProps = {
  isRequired: false,
  isTextArea: false
};

export default TextInput;
