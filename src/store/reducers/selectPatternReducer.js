import {
  SELECT_BUBBLES_PATTERN,
  SELECT_NESTED_PATTERN,
  SELECT_NO_PATTERN
} from "../constants";

const initialState = {
  pattern: "bubbles"
};

export const selectPatternReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BUBBLES_PATTERN:
      return {
        ...state,
        pattern: "bubbles"
      };
    case SELECT_NESTED_PATTERN:
      return {
        ...state,
        pattern: "nested"
      };
    case SELECT_NO_PATTERN:
      return {
        ...state,
        pattern: "noPattern"
      };
    default:
      return state;
  }
};
