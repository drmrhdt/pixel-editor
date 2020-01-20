import React from "react";
import classNames from "classnames";
import ColorPicker from "../ColorPicker";
import ToolSize from "../ToolSize";
import ToolLineJoin from "../ToolLineJoin";
import ToolLine from "../ToolLine";
import ToolFigures from "../ToolFigures";
import ToolPattern from "../ToolPattern";
import ToolShadow from "../ToolShadow";
import ToolOpacity from "../ToolOpacity";
import styles from "./Toolbox.module.scss";

export default function Toolbox(props) {
  const { className } = props;
  return (
    <div className={classNames(styles.toolbox, className)}>
      <h3 className={styles.toolbox__title}>Figure</h3>
      <ToolFigures className={styles["toolbox__tool-group_layout_row"]} />
      <h3 className={styles.toolbox__title}>Pattern</h3>
      <ToolPattern className={styles["toolbox__tool-group_layout_row"]} />
      <h3 className={styles.toolbox__title}>Border</h3>
      <div className={styles["toolbox__tool-group_layout_row"]}>
        <ColorPicker colorParameter="strokeStyle" />
        <ToolSize />
      </div>
      <h3 className={styles.toolbox__title}>Background</h3>
      <ColorPicker colorParameter="fillStyle" />
      <h3 className={styles.toolbox__title}>Shadow</h3>
      <ToolShadow className={styles["toolbox__tool-group_layout_row"]} />
      <h3 className={styles.toolbox__title}>Opacity</h3>
      <ToolOpacity className={styles["toolbox__tool-group_layout_row"]} />
      <h3 className={styles.toolbox__title}>Gradient</h3>
      {/* <ToolLineJoin /> */}
    </div>
  );
}
