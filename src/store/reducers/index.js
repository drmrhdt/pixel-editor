import { combineReducers } from "redux";
import { colorSelectReducer } from "./colorSelectReducer";
import { selectSizeReducer } from "./selectSizeReducer";
import { selectLineJoinReducer } from "./selectLineJoinReducer";
import { selectToolReducer } from "./selectToolReducer";
import { selectFigureReducer } from "./selectFigureReducer";
import { selectPatternReducer } from "./selectPatternReducer";
import { selectShadowParameterReducer } from "./selectShadowParameterReducer";

export const rootReducer = combineReducers({
  colorSelect: colorSelectReducer,
  selectSize: selectSizeReducer,
  selectLineJoin: selectLineJoinReducer,
  selectTool: selectToolReducer,
  selectFigure: selectFigureReducer,
  selectPattern: selectPatternReducer,
  selectShadowParameter: selectShadowParameterReducer
});
