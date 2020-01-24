import React from "react";
import classNames from "classnames";
import styles from "./RadioButton.module.scss";

export default function RadioButton(props) {
  const { item, name, selectedItem, onClick, className } = props;

  return (
    <label
      className={classNames(
        styles["radio-button__label"],
        selectedItem === item
          ? styles["radio-button__label_status_checked"]
          : null,
        className
      )}
      onClick={onClick}
      data-label={item}
    >
      <input
        className={styles["radio-button__input"]}
        type="radio"
        name={name}
      />
    </label>
  );
}
