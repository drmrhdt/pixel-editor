import React from "react";
import classNames from "classnames";
import ToolBorder from "../ToolBorder";
import ToolBackground from "../ToolBackground";
// import ToolLineJoin from "../ToolLineJoin";
// import ToolLine from "../ToolLine";
import ToolFigures from "../ToolFigures";
import ToolPattern from "../ToolPattern";
import ToolShadow from "../ToolShadow";
import ToolOpacity from "../ToolOpacity";
import styles from "./Toolbox.module.scss";

export default function Toolbox({ className }) {
  return (
    <div className={classNames(styles.toolbox, className)}>
      <div className={styles["toolbox__layout_row"]}>
        <ToolFigures
          className={classNames(
            styles["toolbox__tool-group_layout_row"],
            styles["toolbox_width"],
            styles["toolbox__margin-bottom-s"]
          )}
        />
        <ToolPattern
          className={classNames(
            styles["toolbox__tool-group_layout_row"],
            styles["toolbox_width"],
            styles["toolbox__margin-bottom-s"]
          )}
        />
      </div>
      <div className={styles["toolbox__layout_row"]}>
        <ToolBorder
          className={classNames(
            styles["toolbox__tool-group_layout_row"],
            styles["toolbox_width"],
            styles["toolbox__margin-bottom-m"]
          )}
        />
        <ToolBackground
          className={classNames(
            styles["toolbox__tool-group_layout_row"],
            styles["toolbox_width"],
            styles["toolbox__margin-bottom-m"]
          )}
        />
      </div>
      <div className={styles["toolbox__margin-bottom-m"]}>
        <ToolShadow
          className={classNames(styles["toolbox__tool-group_layout_row"])}
        />
      </div>
      <div className={styles["toolbox__margin-bottom-m"]}>
        <ToolOpacity
          className={classNames(styles["toolbox__tool-group_layout_row"])}
        />
      </div>
    </div>
  );
}
