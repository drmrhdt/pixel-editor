import { combineReducers } from "redux";
import { colorSelectReducer } from "./colorSelectReducer";
import { selectSizeReducer } from "./selectSizeReducer";
import { selectLineJoinReducer } from "./selectLineJoinReducer";

export const rootReducer = combineReducers({
  colorSelect: colorSelectReducer,
  selectSize: selectSizeReducer,
  selectLineJoin: selectLineJoinReducer
});
