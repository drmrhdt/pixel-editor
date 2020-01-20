import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button(props) {
  const { children, className, onClick } = props;

  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
}
