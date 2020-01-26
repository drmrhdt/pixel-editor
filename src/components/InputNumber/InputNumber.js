import React from "react";
import classNames from "classnames";
import styles from "./InputNumber.module.scss";

export default function InputNumber({
  className,
  label,
  value,
  onChange,
  min,
  max,
  step,
  type
}) {
  return (
    <label className={styles["input-number__label"]} data-label={label}>
      <input
        className={classNames(styles["input-number__input"], className)}
        type={type}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

InputNumber.defaultProps = {
  className: "",
  label: "",
  value: "0",
  onChange: () => {},
  min: "0",
  max: "100",
  step: "1",
  type: "number"
};
