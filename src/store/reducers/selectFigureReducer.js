const initialState = {
  figure: null
};

export const selectFigureReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CIRCLE_TOOL":
      return {
        ...state,
        figure: "circle"
      };
    case "SELECT_SQUARE_TOOL":
      return {
        ...state,
        figure: "square"
      };
    case "SELECT_TRIANGLE_TOOL":
      return {
        ...state,
        figure: "triangle"
      };
    default:
      return state;
  }
};
