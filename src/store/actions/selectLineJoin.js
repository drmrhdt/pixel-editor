const SELECT_LINE_JOIN = "SELECT_LINE_JOIN";

export const selectLineJoin = payload => {
  return {
    type: SELECT_LINE_JOIN,
    payload
  };
};
