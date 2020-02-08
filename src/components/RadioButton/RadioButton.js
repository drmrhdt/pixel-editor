import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./RadioButton.module.scss";

export default function RadioButton({
  item,
  name,
  selectedItem,
  onClick,
  className,
  children
}) {
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
      {children}
      <input
        className={styles["radio-button__input"]}
        type="radio"
        name={name}
      />
    </label>
  );
}

RadioButton.defaultProps = {
  className: "",
  children: ""
};

RadioButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
