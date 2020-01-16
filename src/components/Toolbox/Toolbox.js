import React from "react";
import ColorPicker from "../ColorPicker";
import ToolSize from "../ToolSize";
import ToolLineJoin from "../ToolLineJoin";
import ToolLine from "../ToolLine";
import styles from "./Toolbox.module.scss";

export default function Toolbox() {
  return (
    <div className={styles.toolbox}>
      <ColorPicker colorParameter="strokeStyle" />
      <ColorPicker colorParameter="fillStyle" />
      <ToolSize />
      <ToolLineJoin />
      <ToolLine />
    </div>
  );
}
