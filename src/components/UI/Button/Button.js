import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.scss";

const button = ({ type, category, icon, size, label, handler, ...props }) => {
  return (
    <button
      type={type}
      className={[
        styles.button,
        styles[`button--${category}`],
        styles[`button--${size}`]
      ].join(" ")}
      onClick={handler}
    >
      {icon} {label}
    </button>
  );
};

button.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

button.defaultProps = {
  handler: null,
  icon: null
};

export default button;
