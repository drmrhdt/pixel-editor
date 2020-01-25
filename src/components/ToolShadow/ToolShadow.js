import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../ColorPicker";
import {
  selectShadowBlur,
  selectShadowOffsetX,
  selectShadowOffsetY
} from "../../store/actions/selectToolShadowParameter";
import InputNumber from "../InputNumber";

export default function ToolShadow(props) {
  const { className } = props;
  const { shadowBlur, shadowOffsetX, shadowOffsetY } = useSelector(
    state => state.selectShadowParameter
  );
  const dispatch = useDispatch();

  const pickShadowBlur = e => {
    dispatch(selectShadowBlur(e.target.value));
  };

  const pickShadowOffsetX = e => {
    dispatch(selectShadowOffsetX(e.target.value));
  };

  const pickShadowOffsetY = e => {
    dispatch(selectShadowOffsetY(e.target.value));
  };

  return (
    <>
      <h3>Shadow</h3>
      <div className={className}>
        <ColorPicker colorParameter="shadowColor" />
        <InputNumber
          label="blur"
          min="-15"
          max="15"
          value={shadowBlur}
          onChange={pickShadowBlur}
        />
        <InputNumber
          type="number"
          label="offset x"
          min="-15"
          max="15"
          value={shadowOffsetX}
          onChange={pickShadowOffsetX}
        />
        <InputNumber
          type="number"
          label="offset y"
          min="-15"
          max="15"
          value={shadowOffsetY}
          onChange={pickShadowOffsetY}
        />
      </div>
    </>
  );
}
