import React from "react";
import PropTypes from "prop-types";
import styles from "./Icons.module.scss"; // - style individual svgs
import image from "../../../assets/img/sprite.svg"; // - Put all svgs in this file

const icons = (props) => {
  return (
    <svg className={[styles.icon, styles[`icon${props.iconName}`]].join(" ")}>
      <use xlinkHref={image + `#${props.icon}`} />
      {/* Some icons may have children. Like notifactions  */}
      {props.children}
    </svg>
  );
};

icons.propTypes = {
  icon: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};

export default icons;
