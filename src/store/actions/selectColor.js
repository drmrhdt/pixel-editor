import {
  SELECT_STROKE_STYLE,
  SELECT_FILL_STYLE,
  SELECT_SHADOW_COLOR
} from "../constants";

export const selectStrokeStyle = payload => {
  return {
    type: SELECT_STROKE_STYLE,
    payload
  };
};

export const selectFillStyle = payload => {
  return {
    type: SELECT_FILL_STYLE,
    payload
  };
};

export const selectShadowColor = payload => {
  return {
    type: SELECT_SHADOW_COLOR,
    payload
  };
};
