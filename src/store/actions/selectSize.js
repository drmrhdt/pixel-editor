import { SELECT_SIZE } from "../constants";

export const selectSize = payload => {
  return {
    type: SELECT_SIZE,
    payload
  };
};
