import { SELECT_LINE_JOIN } from "../constants";

export const selectLineJoin = payload => {
  return {
    type: SELECT_LINE_JOIN,
    payload
  };
};
