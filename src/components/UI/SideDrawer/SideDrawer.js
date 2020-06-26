import React, { useState } from "react";
import styles from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const [isOpen, setOpen] = useState(false);

  return <div className={styles.sidedrawer}></div>;
};

export default SideDrawer;
