import {
  SELECT_SHADOW_PARAMETER_BLUR,
  SELECT_SHADOW_PARAMETER_OFFSET_X,
  SELECT_SHADOW_PARAMETER_OFFSET_Y
} from "../constants";

const initialState = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0
};

export const selectShadowParameterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHADOW_PARAMETER_BLUR:
      return {
        ...state,
        shadowBlur: action.payload
      };
    case SELECT_SHADOW_PARAMETER_OFFSET_X:
      return {
        ...state,
        shadowOffsetX: action.payload
      };
    case SELECT_SHADOW_PARAMETER_OFFSET_Y:
      return {
        ...state,
        shadowOffsetY: action.payload
      };
    default:
      return state;
  }
};
