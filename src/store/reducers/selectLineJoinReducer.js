import { SELECT_LINE_JOIN } from "../constants";

const initialState = {
  lineJoin: "round"
};

export const selectLineJoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LINE_JOIN:
      return {
        ...state,
        lineJoin: action.payload
      };
    default:
      return state;
  }
};
