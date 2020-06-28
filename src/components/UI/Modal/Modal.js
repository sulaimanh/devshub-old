import React, { useMemo } from "react";
import styles from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";

const Modal = React.memo((props, nextProps) => {
  // - We only want this modal to update if the 'show' prop changes. This will help us improve performance.
  // - So, when the user clicks the ORDER NOW button, the component will then update.
  //    Otherwise, there is no point in updating this component.

  return (
    <React.Fragment>
      <Backdrop show={props.show} handler={props.handler} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
});

export default Modal;
