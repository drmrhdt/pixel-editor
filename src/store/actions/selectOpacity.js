import { SELECT_OPACITY } from "../constants";

export const selectOpacity = payload => {
  return {
    type: SELECT_OPACITY,
    payload
  };
};
