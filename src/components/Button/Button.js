import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button({ children, className, onClick }) {
  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
}
