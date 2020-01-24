import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { selectFigure } from "../../store/actions/selectFigure";
import styles from "./ToolFigures.module.scss";

export default function ToolFigures(props) {
  const { className } = props;
  const dispatch = useDispatch();

  let pickFigure = e => {
    dispatch(selectFigure(e.currentTarget.dataset.label));
  };

  return (
    <div className={classNames(styles["tool-figures"], className)}>
      <input
        className={styles["tool-figures__tool-input"]}
        type="radio"
        name="figure"
        id="square"
      />
      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_square"]
        )}
        onClick={pickFigure}
        htmlFor="square"
        data-label="square"
      />

      <input
        className={styles["tool-figures__tool-input"]}
        type="radio"
        name="figure"
        id="rect"
      />
      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_rectangle"]
        )}
        onClick={pickFigure}
        htmlFor="rect"
        data-label="rectangle"
      />

      <input
        className={styles["tool-figures__tool-input"]}
        type="radio"
        name="figure"
        id="circle"
      />
      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_circle"]
        )}
        onClick={pickFigure}
        htmlFor="circle"
        data-label="circle"
      />

      <input
        className={styles["tool-figures__tool-input"]}
        type="radio"
        name="figure"
        id="line"
      />
      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_line"]
        )}
        onClick={pickFigure}
        htmlFor="line"
        data-label="line"
      />
    </div>
  );
}
