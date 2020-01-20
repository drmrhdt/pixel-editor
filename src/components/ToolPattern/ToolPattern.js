import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { selectPattern } from "../../store/actions/selectPattern";

export default function ToolPattern(props) {
  const { className } = props;
  // const tool = useSelector(state => state.selectTool.tool);
  const dispatch = useDispatch();

  let pickPattern = e => {
    dispatch(selectPattern(e.target.value));
  };

  return (
    <div className={classNames(className)}>
      <label onChange={pickPattern}>
        <input type="radio" name="pattern" value="bubbles" />
        bubbles
      </label>
      <label onChange={pickPattern}>
        <input type="radio" name="pattern" value="nested" />
        nested
      </label>
    </div>
  );
}
