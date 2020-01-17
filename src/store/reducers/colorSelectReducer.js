const initialState = {
  strokeStyle: "#000000",
  fillStyle: "#000000",
  shadowColor: "#dddddd"
};

export const colorSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_STROKE_STYLE":
      return {
        ...state,
        strokeStyle: action.payload
      };
    case "SELECT_FILL_STYLE":
      return {
        ...state,
        fillStyle: action.payload
      };
    case "SELECT_SHADOW_COLOR":
      return {
        ...state,
        shadowColor: action.payload
      };
    default:
      return state;
  }
};
