import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button({ children, className, onClick }) {
  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: ""
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
