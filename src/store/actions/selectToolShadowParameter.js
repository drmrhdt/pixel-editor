const SELECT_SHADOW_PARAMETER_BLUR = "SELECT_SHADOW_PARAMETER_BLUR";
const SELECT_SHADOW_PARAMETER_OFFSET_X = "SELECT_SHADOW_PARAMETER_OFFSET_X";
const SELECT_SHADOW_PARAMETER_OFFSET_Y = "SELECT_SHADOW_PARAMETER_OFFSET_Y";

export const selectShadowBlur = payload => {
  return {
    type: SELECT_SHADOW_PARAMETER_BLUR,
    payload
  };
};
export const selectShadowOffsetX = payload => {
  return {
    type: SELECT_SHADOW_PARAMETER_OFFSET_X,
    payload
  };
};
export const selectShadowOffsetY = payload => {
  return {
    type: SELECT_SHADOW_PARAMETER_OFFSET_Y,
    payload
  };
};
