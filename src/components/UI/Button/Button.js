import React from "react";
import styles from "./Button.module.scss";

const button = ({
  type,
  category,
  icon,
  backgroundColor,
  size,
  label,
  handler,
  ...props
}) => {
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

export default button;
