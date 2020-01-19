import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../ColorPicker";
import {
  selectShadowBlur,
  selectShadowOffsetX,
  selectShadowOffsetY
} from "../../store/actions/selectToolShadowParameter";

export default function ToolShadow() {
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
    <div>
      <ColorPicker colorParameter="shadowColor" />
      <label>
        shadow blur
        <input
          type="range"
          min="-15"
          max="15"
          value={shadowBlur}
          onChange={pickShadowBlur}
        />
      </label>
      <label>
        shadow offset x
        <input
          type="range"
          min="-15"
          max="15"
          value={shadowOffsetX}
          onChange={pickShadowOffsetX}
        />
      </label>
      <label>
        shadow offset y
        <input
          type="range"
          min="-15"
          max="15"
          value={shadowOffsetY}
          onChange={pickShadowOffsetY}
        />
      </label>
    </div>
  );
}
