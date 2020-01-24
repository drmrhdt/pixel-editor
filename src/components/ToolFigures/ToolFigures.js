import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { selectFigure } from "../../store/actions/selectFigure";
import styles from "./ToolFigures.module.scss";

export default function ToolFigures(props) {
  const { className } = props;
  const figure = useSelector(state => state.selectFigure.figure);
  const dispatch = useDispatch();

  let pickFigure = e => {
    dispatch(selectFigure(e.currentTarget.dataset.label));
  };

  return (
    <div className={classNames(styles["tool-figures"], className)}>
      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_square"],
          figure === "square"
            ? styles["tool-figures__tool-label_status_checked"]
            : null
        )}
        onClick={pickFigure}
        data-label="square"
      >
        <input
          className={styles["tool-figures__tool-input"]}
          type="radio"
          name="figure"
        />
      </label>
      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_rectangle"],
          figure === "rectangle"
            ? styles["tool-figures__tool-label_status_checked"]
            : null
        )}
        onClick={pickFigure}
        data-label="rectangle"
      >
        <input
          className={styles["tool-figures__tool-input"]}
          type="radio"
          name="figure"
        />
      </label>

      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_circle"],
          figure === "circle"
            ? styles["tool-figures__tool-label_status_checked"]
            : null
        )}
        onClick={pickFigure}
        data-label="circle"
      >
        <input
          className={styles["tool-figures__tool-input"]}
          type="radio"
          name="figure"
        />
      </label>

      <label
        className={classNames(
          styles["tool-figures__tool-label"],
          styles["tool-figures__tool_type_line"],
          figure === "line"
            ? styles["tool-figures__tool-label_status_checked"]
            : null
        )}
        onClick={pickFigure}
        data-label="line"
      >
        <input
          className={styles["tool-figures__tool-input"]}
          type="radio"
          name="figure"
        />
      </label>
    </div>
  );
}
