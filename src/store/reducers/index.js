import { combineReducers } from "redux";
import { colorSelectReducer } from "./colorSelectReducer";
import { selectSizeReducer } from "./selectSizeReducer";

export const rootReducer = combineReducers({
  colorSelect: colorSelectReducer,
  selectSize: selectSizeReducer
});
