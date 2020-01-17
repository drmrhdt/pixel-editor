import React from "react";
import classNames from "classnames";
import ColorPicker from "../ColorPicker";
import ToolSize from "../ToolSize";
import ToolLineJoin from "../ToolLineJoin";
import ToolLine from "../ToolLine";
import ToolFigures from "../ToolFigures";
import ToolPattern from "../ToolPattern";
import ToolShadow from "../ToolShadow";
import styles from "./Toolbox.module.scss";

export default function Toolbox(props) {
  const { className } = props;
  return (
    <div className={classNames(styles.toolbox, className)}>
      <ColorPicker colorParameter="strokeStyle" />
      <ColorPicker colorParameter="fillStyle" />
      <ToolFigures />
      <ToolPattern />
      <ToolShadow />
      <ToolSize />
      {/* <ToolLineJoin /> */}
    </div>
  );
}
