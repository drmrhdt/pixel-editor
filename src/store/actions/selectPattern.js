import { SELECT_BUBBLES_PATTERN, SELECT_NESTED_PATTERN } from "../constants";

export const selectPattern = payload => {
  switch (payload) {
    case "bubbles":
      return {
        type: SELECT_BUBBLES_PATTERN,
        payload
      };
    case "nested":
      return {
        type: SELECT_NESTED_PATTERN,
        payload
      };
    default:
      return {
        type: SELECT_BUBBLES_PATTERN,
        payload
      };
  }
};
